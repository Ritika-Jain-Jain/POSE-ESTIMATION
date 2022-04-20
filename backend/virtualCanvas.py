import imp
import cv2
import time
import os
import numpy as np
import random
import HandTrackingModule as htm

import utils

from flask import Flask,render_template,Response
from flask_cors import CORS, cross_origin


class Canvas:

    def __init__(self):
        self.pTime = 0
        self.cTime = 0

        self.cap = cv2.VideoCapture(0)

        self.detector = htm.HandDetector()

        self.painterPoints = []     #x, y of painter
        self.stopperPoints = []    #x, y of stopper(tip of middle finger)

        #coordinates for color strip
        self.xmin, self.ymin = 20, 0
        self.ymax = 100
        
        #### logo dimensions #####
        self.eraserDim = (50,75)
        self.clearScreenDim = (50,75)
        self.saveDim = (50,75)
        self.patternDim = (50, 75)
        self.exitDim =(50, 75)

        ##### logo coordinates #####
        self.eraserCoord = {"y": (250, 325), "x": (0, 50)}
        self.clearScreenCoord = {"y": (350, 425), "x": (0,50)}
        self.patternCord = {"y": (450, 525), "x": (0, 50)}
        self.saveCoord = {"y": (550, 625), "x": (0, 50)}
        self.exitCord = {"y": (650, 725), "x": (0, 50)}
    

    #drawing function
    def draw(self, points, points1, img, mainImage, strip_X_coord, colorList, img_y, img_x, saving, patterns, patternNo):
        # print(2)
        color = 0
        eraser = False
        patternStatus = False
        # saving = False
        saveBox = False
        saved = False
        # saved = False
        cacheColor = 0
        clearScreen = False

        exit = False

        y_max=self.ymax+5

        for point, point1 in zip(points, points1):

            ##### painting ######
            color = utils.paint(img, point, point1, self.xmin, self.ymax, y_max, strip_X_coord, colorList, color)
            

            ###### eraser functionality #######
            # if point[1] < point1[1] and point[0] < self.eraserDim[0] and point[1] > self.eraserCoord["y"][0] and point[1] < self.eraserCoord["y"][1]:
            eraser, color = utils.eraser(img, point, point1, self.xmin, y_max, eraser, self.eraserDim, self.eraserCoord, color, cacheColor)
            

            ###### clear whole screen #######
            if point[1] < point1[1] and point[0] < self.clearScreenDim[0] and point[1] > self.clearScreenCoord["y"][0] and point[1] < self.clearScreenCoord["y"][1]:
                clearScreen, color = utils.clearScreen(img, point, point1, clearScreen, self.clearScreenDim, self.clearScreenCoord, color, cacheColor)


            ######## patterns ###########
            if point[1] < point1[1] and point[0] < self.patternDim[0] and point[1] > self.patternCord["y"][0] and point[1] < self.patternCord["y"][1]:
                utils.printPatterns(patterns, patternStatus, mainImage, self.patternDim, self.patternCord, point, point1, patternNo)

            
            ###### save button #####
            if point[1] < point1[1] and point[0] < self.saveDim[0] and point[1] > self.saveCoord["y"][0] and point[1] < self.saveCoord["y"][1]:
                saved = utils.saveImage(mainImage,img_y, img_x, point, point1,self.saveCoord, saving, saveBox, saved)
            # print(saving)

            ###### exit button ########
            if point[1] < point1[1] and point[0] < self.exitDim[0] and point[1] > self.exitCord["y"][0] and point[1] < self.exitCord["y"][1]:
                exit = utils.exit()

            # if saving == "cancel" and point[1] > point1[1]:
            #     saving = False
                # saving, saveBox = utils.saveImage(mainImage,img_y, img_x, point, point1,self.saveCoord, saving, saveBox)


            # if saving == "cancel":
            #     saving = False
                # print(saving)

        return eraser, saved, exit



    ## main canvas function
    def canvas(self):
        eraser = False
        saving = False
        saved = False
        exit = False
        # saveBox = False

        # patternStatus = False
        patternNo = random.randint(0,4)

        # patterns = utils.patterns()

        # pattern1 = cv2.resize(patterns[3], (1400, 700))
        # pattern1 = cv2.cvtColor(pattern1, cv2.COLOR_BGR2GRAY)
        # _, pattern1Inv = cv2.threshold(pattern1, 0, 255, cv2.THRESH_BINARY_INV)
        # pattern1 = cv2.cvtColor(pattern1, cv2.COLOR_GRAY2BGR)

        while True:

            success, img = self.cap.read()

            #flipping the video frames
            img = cv2.flip(img, 1)

            img = cv2.resize(img, (1600,900))
            imgShape = img.shape

            (img_y, img_x, img_c) = imgShape

            ### re-defining save button dimensions
            # self.saveCoord["x"] = (img_x-50, img_x)

            # print(f"img x: {img_x}")
            # print(f"img y: {img_y}")
            # print(f"img c: {img_c}")
            # print(imgShape)

            imgCanvas = np.zeros(imgShape, np.uint8)

            # imgGray = cv2.cvtColor(imgCanvas, cv2.COLOR_BGR2GRAY)
            # _, imgInv = cv2.threshold(imgGray, 0, 255, cv2.THRESH_BINARY_INV)
            # imgInv = cv2.cvtColor(imgInv, cv2.COLOR_GRAY2BGR)
            # imgInv = cv2.cvtColor(imgInv, cv2.COLOR_BGR2RGB)

            ### detecting hands
            image = self.detector.findHands(img, draw = False)

            landmarksList = self.detector.findPosition(img, eraser = eraser)

            if len(landmarksList) != 0:
                #tip of index finger
                x = landmarksList[8][1]
                y = landmarksList[8][2]
                self.painterPoints.append([x,y])
                # print(f"points: {points}")

                # tip of middle finger
                x1 = landmarksList[12][1]
                y1 = landmarksList[12][2]
                self.stopperPoints.append([x1,y1])
                # print(f"points1: {points1}")
            

            self.cTime = time.time()
            fps = 1 / (self.cTime - self.pTime)
            self.pTime = self.cTime

            # print(fps)
            # cv2.putText(imgCanvas, str(int(fps)), (img_x//2-262, img_y//2+110), cv2.FONT_HERSHEY_SIMPLEX, 5, (255,255,255), 8)

            color_X_Coordinates, colorList = utils.colorStrip(self.xmin, self.ymin, self.ymax, image)


            ######## setting up patterns#########
            patterns = utils.patterns()

            
            #####################       Painting        #######################
            if len(self.painterPoints) != 0 and len(self.stopperPoints) != 0:
                # print(1)
                eraser, saved, exit = self.draw(self.painterPoints, self.stopperPoints, imgCanvas, image, color_X_Coordinates, colorList, img_y, img_x, saving, patterns, patternNo)

                if exit == True:
                    # cv2.waitKey(1000)
                    # cv2.imwrite(f"./savedImages/name_{random.randint(10000, 99999)}.jpg", image)
                    # cv2.waitKey(2000)
                    cv2.putText(image, f"EXITING", (img_x//2-390, img_y//2-60), cv2.FONT_HERSHEY_SIMPLEX, 3, (126, 37, 87), 10)
                    cv2.imshow('Virtual Canvas', image)
                    cv2.waitKey(1000)
                    # cv2.imwrite("Hand_Tracking/saved_image.jpg", img)
                    break

                # if saved == True:
                # # cv2.imwrite("Hand_Tracking/saved_image.jpg", img)
                #     continue
                
            # print(saved)
                # if saving == "cancel":
                #     saving = False


            imgGray = cv2.cvtColor(imgCanvas, cv2.COLOR_BGR2GRAY)
            _, imgInv = cv2.threshold(imgGray, 0, 255, cv2.THRESH_BINARY_INV)
            imgInv = cv2.cvtColor(imgInv, cv2.COLOR_GRAY2BGR)
            # # imgInv = cv2.cvtColor(imgInv, cv2.COLOR_BGR2RGB)



            #printing patterns
            # patternStatus, image = utils.printPatterns(imgInv, patterns, patternStatus, image, imgCanvas, self.painterPoints, self.stopperPoints, pattern1, eraser)


            ####### joining images ########
            image = cv2.bitwise_and(image, imgInv)
            image = cv2.bitwise_or(image, imgCanvas)


            if saved == True:
                # cv2.waitKey(1000)
                cv2.imwrite(f"./savedImages/name_{random.randint(10000, 99999)}.jpg", image)
                # cv2.waitKey(2000)
                cv2.putText(image, f"IMAGE SAVED", (img_x//2-390, img_y//2-60), cv2.FONT_HERSHEY_SIMPLEX, 3, (126, 37, 87), 10)
                cv2.imshow('Virtual Canvas', image)
                cv2.waitKey(1000)
                # cv2.imwrite("Hand_Tracking/saved_image.jpg", img)
                break


            ######## setting up logos #######

            logos = utils.logos()

            ##printing logos
            utils.printLogo(image, logos, self.eraserDim, self.eraserCoord, self.clearScreenDim, self.clearScreenCoord,
                            self.patternDim, self.patternCord, self.saveDim, self.saveCoord, self.exitDim, self.exitCord)

            
            ret,buffer=cv2.imencode('.jpg',image)
            frame=buffer.tobytes()

            yield(b'--frame\r\n'
                b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')


            cv2.imshow('Virtual Canvas', image)
            # cv2.imshow('canvas', imgCanvas)
            # cv2.imshow('inverse', imgInv)
            if (cv2.waitKey(1) & 0xFF == ord('q')):
                # cv2.imwrite("Hand_Tracking/saved_image.jpg", img)
                break

        
        #releasing resourses
        self.cap.release()
        cv2.destroyAllWindows

# if __name__ == "__main__":
#     Canvas().canvas()


app=Flask(__name__)
CORS(app, resources={r"/api/*":{"origins":"*"}})
app.config['CORS HEADERS'] = 'Content-Type'
@app.route('/')
@cross_origin()
def index():
    return render_template('index1.html')

@app.route('/video')
@cross_origin()
def video():
    return Response(Canvas().canvas(),mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__=="__main__":
    app.run(debug=True)