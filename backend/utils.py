import random
import cv2
import time
import os
import numpy as np


#logos
def logos():
    folderPath = "./buttonLogos"
    myList = os.listdir(folderPath)
    # print(myList)

    overlayList = []

    for imPath in myList:
        image = cv2.imread(f'{folderPath}/{imPath}')
        overlayList.append(image)
    
    # print(len(overlayList))
    # print(overlayList)

    return overlayList


# print logo
def printLogo(image, logos, eraserDim, eraserCoord, clearScreenDim, clearScreenCoord, patternDim, patternCord, saveDim, saveCoord, exitDim, exitCord):
    #eraser logo
    eraserLogo = cv2.resize(logos[1], eraserDim)
    image[eraserCoord["y"][0]:eraserCoord["y"][1], eraserCoord["x"][0]:eraserCoord["x"][1]] = eraserLogo

    #clearScreen logo
    clearScreenLogo = cv2.resize(logos[0], clearScreenDim)
    image[clearScreenCoord["y"][0]:clearScreenCoord["y"][1], clearScreenCoord["x"][0]:clearScreenCoord["x"][1]] = clearScreenLogo

    #pattern logo
    patternLogo = cv2.resize(logos[3], patternDim)
    image[patternCord["y"][0]:patternCord["y"][1], patternCord["x"][0]:patternCord["x"][1]] = patternLogo
    
    #save logo
    saveLogo = cv2.resize(logos[4], saveDim)
    image[saveCoord["y"][0]:saveCoord["y"][1], saveCoord["x"][0]:saveCoord["x"][1]] = saveLogo

    #exit logo
    exitLogo = cv2.resize(logos[2], exitDim)
    image[exitCord["y"][0]:exitCord["y"][1], exitCord["x"][0]:exitCord["x"][1]] = exitLogo

    #next pattern logo if pattern is selected
    # if patternStatus:
    #     patternLogo = cv2.resize(cv2.imread('patternLogos/next.png'), (80,100))
    #     image[400:500, 1520:1600] = patternLogo




##patterns
def patterns():
    folderPath = "./patterns"
    myList = os.listdir(folderPath)
    # print(myList)

    patternList = []

    for imPath in myList:
        image = cv2.imread(f'{folderPath}/{imPath}')
        patternList.append(image)
    
    # print(len(overlayList))
    # print(overlayList)

    return patternList


def printPatterns(patterns, patternStatus, img, patternDim, patternCord, point, point1, patternNo):

    # print(patternStatus)

    # if point[1] < point1[1] and point[0] < patternDim[0] and point[1] > patternCord["y"][0] and point[1] < patternCord["y"][1]:
    patternStatus = True
        

    # print(patternNo)

    # patternNew = cv2.resize(patternNew, (1600,900))
    
    # cv2.imshow("pattern", patterns[1])
    
    if patternStatus == True:
        # patternNo = random.randint(0,4)
        # patternNo = 0
        # print("point: ",point)
        # print("point1: ", point1)
        # if point[1]<point1[1] and point[0]>1520:
        #     # print("true")
        #     patternNo += 1
        #     if patternNo == 4:
        #         patternNo = 0
        #         pass
        # print(patternNo)
        pattern = cv2.resize(patterns[patternNo], (1400, 700))
        img[150:850, 100:1500] = pattern
    
    return patternStatus

    






    # if patternStatus == True:
    # pattern1 = cv2.resize(patterns[3], (1200, 600))
    # pattern1 = cv2.cvtColor(pattern1, cv2.COLOR_BGR2GRAY)
    # _, pattern1Inv = cv2.threshold(pattern1, 0, 255, cv2.THRESH_BINARY_INV)
    
    # cv2.imshow("inv pattern", pattern1Inv)

    #     # if points:
    #     #     patternStatus = False


    # pattern1 = cv2.cvtColor(pattern1, cv2.COLOR_GRAY2BGR)
    # pattern1Inv = cv2.cvtColor(pattern1, cv2.COLOR_GRAY2BGR)

    # cv2.imshow('pattern 1', pattern1Inv)
    # imgCanvas[200:600, 200:600] = pattern1Inv
    # img = cv2.bitwise_or(imgCanvas, pattern1Inv)

    # if patternNew:






    # pattern1 = patternNew

    # if patternStatus == True:
    #     imgInv[150:750, 200:1400] = pattern1
    #     for point, point1 in zip(points, points1):
    #         # cv2.circle(img, (point[0], point[1]), 12, (255,87,97), cv2.FILLED)
    #         # cv2.circle(imgCanvas, (point[0], point[1]), 12, (255,87,97), cv2.FILLED)
    #         if point[1]>150 and point[1]<750 and point[0]>200 and point[0]<1400:
    #             cv2.circle(pattern1, (point[0]-200, point[1]-150), 12, (255,87,97), cv2.FILLED)
    #             cv2.circle(imgCanvas, (point[0], point[1]), 12, (255,87,97), cv2.FILLED)

    #             if eraserStat:
    #                 # eraser(img, point, point1, 20, 105, eraserStat, (50,75), {"y": (250, 325), "x": (0, 50)}, (255,87,97), 0)
    #                 # cv2.circle(pattern1, (point[0]-200, point[1]-150), 12, (255,255,255), cv2.FILLED)
    #                 cv2.circle(imgCanvas, (point[0], point[1]), 12, (0,0,0), cv2.FILLED)

    #         else:
    #             cv2.circle(imgCanvas, (point[0], point[1]), 12, (255,87,97), cv2.FILLED)
    #             cv2.circle(imgInv, (point[0], point[1]), 12, (255,87,97), cv2.FILLED)

    #             if eraserStat:
    #                 cv2.circle(imgInv, (point[0], point[1]), 12, (255,255,255), cv2.FILLED)
    #                 cv2.circle(imgCanvas, (point[0], point[1]), 12, (0,0,0), cv2.FILLED)






            # print(point)
            # img = cv2.bitwise_or(imgCanvas, pattern1Inv)

        # if cv2.waitKey(1) & 0xFF == ord('w'):
            # cv2.imwrite("Hand_Tracking/saved_image.jpg", img)
            # break
        # patternStatus = False
    # pattern1 = pattern1.resize(imgInv.shape)
    # imgInv = cv2.bitwise_or(imgInv, pattern1)
    # return patternStatus, img#, pattern1


# def printPatterns(img, point, point1, patternDim, patternCoord, patternStatus):

#     ## patternLogos
#     folderPath = "patternLogos"
#     myList = os.listdir(folderPath)
#     # print(myList)

#     patternLogoList = []

#     for imPath in myList:
#         image = cv2.imread(f'{folderPath}/{imPath}')
#         patternLogoList.append(image)

#     nextLogo = patternLogoList[0]

#     previousLogo = patternLogoList[1]

#     if point[1] < point1[1] and point[0] < patternDim[0] and point[1] > patternCoord["y"][0] and point[1] < patternCoord["y"][1]:




#color strip function
def colorStrip(stX, stY, endY, image):
    x=stX
    y=stY

    r,g,b = 255,0,0
    color_X_Coordinates = []
    colorList = []

    # for i in range(765):
    color = (b,g,r)     #255,0,0
    color_X_Coordinates.append(20)
    while True:
        if g>=0 and g<255 and r == 255 and b == 0:
            colorList.append(color)
            # print(color)
            # b -= 1
            g += 1
            color = (b,g,r)

        elif g==255 and b==0 and r<=255 and r>0:
            colorList.append(color)
            r -= 1
            color = (b,g,r)
        
        elif r==0 and g==255 and b>=0 and b<255:
            colorList.append(color)
            b += 1
            color = (b,g,r)
        
        elif r==0 and b==255 and g<=255 and g>0:
            colorList.append(color)
            g -= 1
            color = (b,g,r)
        
        elif g==0 and b==255 and r>=0 and r<255:
            colorList.append(color)
            r += 1
            color = (b,g,r)
        
        elif r==255 and g==0 and b<=255 and b>1:
            colorList.append(color)
            b -= 1
            color = (b,g,r)
        
        elif r==255 and g==0 and b==1:
            colorList.append(color)
            break    
            
        cv2.line(image, (x, y), (x, endY), color)
        x += 1
        color_X_Coordinates.append(x)

    return color_X_Coordinates, colorList


### painting function
def paint(image, point, point1, xmin, ymax, y_max, strip_X_coord, colorList, color):
    # print("paint")
    if point[1]<ymax and point[0]>=xmin and point[0]<len(strip_X_coord):
        # print(len(strip_X_coord))
        # print(point)
        # print("inside color strip")
        stripIndex = strip_X_coord.index(point[0])
        # print("stripIndex: ",stripIndex)
        color = colorList[stripIndex]
        # print("color",color)
        # for i in paintColor:
        #     if lenColor*i < point[0] < lenColor*(i+1):
        #         color = paintColor[i]
        # print(f"color: {color}")
    
    # print(f"color below strip: {color}")
    
    elif point[1]>y_max and point[1] <= point1[1] and color != 0:
        # print(point)
        # print("painting")
        # print(f"color now: {color}")
        cv2.circle(image, (point[0], point[1]), 12, color, cv2.FILLED)
        # cv2.line(image, point[0], point[1], color, cv2.FILLED)
    
    return color


### eraser function
def eraser(image, point, point1, xmin, y_max, eraser, eraserDim, eraserCoord, color, cacheColor):
    # print("eraser")
    if color != (0,0,0):        #eraser is not selected
        cacheColor = 0
    
    if point[1] < point1[1] and point[0] < eraserDim[0] and point[1] > eraserCoord["y"][0] and point[1] < eraserCoord["y"][1]:
        color = (0,0,0)
        eraser = True
    
    ## for showing eraser
    if point[1] < point1[1] and eraser == True:
        cv2.circle(image, (point[0], point[1]), 30, color, cv2.FILLED)
        # eraser = True
    
    if (point[1]>point1[1] and eraser == True) or (point[1]<y_max+5 and point[0]>=xmin and eraser == True):
        eraser=False
        # continue
        color = cacheColor
    
    return eraser, color


### clear screen function
def clearScreen(image, point, point1, clearScreen, clearScreenDim, clearScreenCoord, color, cacheColor):
    # print("clear")
    if color != (0,0,0):        #eraser is not selected
        cacheColor = 0

    if point[1] < point1[1] and point[0] < clearScreenDim[0] and point[1] > clearScreenCoord["y"][0] and point[1] < clearScreenCoord["y"][1]:
        color = 0
        clearScreen = True
        cv2.rectangle(image, (0,0), (image.shape[1], image.shape[0]), (0,0,0), cv2.FILLED)
    
    if point[1]>point1[1] and clearScreen == True:
        clearScreen=False
        # continue
        color = cacheColor
    
    return clearScreen, color


### save image function
def saveImage(image, img_y, img_x, point, point1, saveCoord, saving, saveBox, saved):

    # cv2.imwrite(f"./savedImages/name_{random.randint(10000, 99999)}.jpg", image)
    # cv2.waitKey(2000)
    # cv2.putText(image, f"IMAGE SAVED", (img_x//2-390, img_y//2-60), cv2.FONT_HERSHEY_SIMPLEX, 3, (126, 37, 87), 10)
    saved = True
    return saved




    # # print("save")
    # # if saving == False:
    # # print(img_y,img_x, sep='\t')
    # # saveBox = False

    # # savingCache = saving
    
    
    # # if point[1] < point1[1] and point[0] < saveCoord["x"][1] and point[1] > saveCoord["y"][0] and point[1] < saveCoord["y"][1] and saving == "cancel":
    # #     saving = False
    # #     print(saving)

    # # saved = False

    # # if saving == "cancel":
    # #     point.clear()
    # #     point1.clear()
    # #     # if point[1]>point1[1]:
    # #     saving = False
    # #     # else:
    # #     # saving = saving

    # # print(saving)
    # # print(point, point1, sep='\n')

    # if point[1] < point1[1] and point[0] < saveCoord["x"][1] and point[1] > saveCoord["y"][0] and point[1] < saveCoord["y"][1] and saving == False:
    #     # print("saving")
    #     cv2.rectangle(image, (img_x//2-400, img_y//2-150), (img_x//2+400, img_y//2+150), (0,0,255), 5)

    #     cv2.putText(image, "CONFIRM SAVING", (img_x//2-390, img_y//2-60), cv2.FONT_HERSHEY_SIMPLEX, 3, (126, 37, 87), 10)

    #     cv2.rectangle(image, (img_x//2-320, img_y//2+50), (img_x//2-50, img_y//2+125), (255,0,0), cv2.FILLED)
    #     cv2.putText(image, "SAVE", (img_x//2-262, img_y//2+110), cv2.FONT_HERSHEY_SIMPLEX, 2, (255,255,255), 5)

    #     cv2.rectangle(image, (img_x//2+50, img_y//2+50), (img_x//2+320, img_y//2+125), (255,0,0), cv2.FILLED)
    #     cv2.putText(image, "CANCEL", (img_x//2+68, img_y//2+110), cv2.FONT_HERSHEY_SIMPLEX, 2, (255,255,255), 5)

    #     saveBox = True
    #         # save = False
    
    # if point[1] < point1[1] and (point[0] > img_x//2-320 and point[0] < img_x//2-50) and (point[1] > img_y//2+50 and point[1] < img_y//2+125) and saveBox==True:
    #     saving = True
    #     # saved = False
    #     # counter = 5
    
    # # print(saving, saved, sep='\t')

    # if point[1] < point1[1] and (point[0] > img_x//2+50 and point[0] < img_x//2+320) and (point[1] > img_y//2+50 and point[1] < img_y//2+125) and saveBox==True:
    #     saving = "cancel"
    #     # saved = "cancel"
    #     # print(saving)

    
    # if saving == True:
    #     # for i in range(5):
    #     # if saved == False:
    #     cv2.putText(image, f"SAVING IMAGE", (img_x//2-450, img_y//2-60), cv2.FONT_HERSHEY_SIMPLEX, 3, (126, 37, 87), 10)
    #     saved = True
    #     # return saving, saveBox, saved
    #         # counter -= 1
    #     # cv2.waitKey(2000)
    #     # saved = True
        
    #     # print("saved: ", saved)

    # if saving == "cancel":
    #     # sT = time.time()
    #     time.sleep(1)
    #     saving == False
    #     # cv2.waitKey(2000)
    #     # if int(time.time() - sT) == 5:
    #     # print(int(time.time() - sT))
    #         # saving = False
    # #     point.clear()
    # #     point1.clear()
    # #     # if point[1]>point1[1]:
    # #     saving = False
    # #     # else:
    # #     # saving = saving


    # # elif saving == "cancel":
    # #     # cv2.putText(image, f"IMAGE SAVED", (img_x//2-390, img_y//2-60), cv2.FONT_HERSHEY_SIMPLEX, 3, (126, 37, 87), 10)
    # #     # saving = True
    # #     # saveBox = False
    # #     saved = False
    #     # return saving, saveBox, saved
    
    # # if point[1] > point1[1] and saved == "cancel":
    # #     # print("xsfdgddd")
    # #     saving = False


        
    # return saving, saveBox, saved

def exit():
    exit = True
    return exit



if __name__ == "__main__":
    logos()