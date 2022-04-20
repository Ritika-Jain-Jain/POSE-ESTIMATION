from flask import Flask,render_template,Response
import cv2
import numpy as np

from virtualCanvas import Canvas

app=Flask(__name__)
camera=cv2.VideoCapture(0)

def generate_frames():
    while True:
            
        ## read the camera frame
        success,frame=camera.read()
        color1 = (list(np.random.choice(range(256), size=3)))  
        color =[int(color1[0]), int(color1[1]), int(color1[2])]  
        frame = cv2.circle(frame, (120, 50), 20, color, 7)  
        frame = cv2.line(frame, (0,0), (250,250), color, 9)
        if not success:
            break
        else:
            ret,buffer=cv2.imencode('.jpg',frame)
            frame=buffer.tobytes()

        if cv2.waitKey(1) & 0xFF == ord('q'):
            cv2.imwrite("Hand_Tracking/saved_image.jpg", frame)
            break
        
        yield(b'--frame\r\n'
                b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')


        # frame = Canvas().canvas()

        # yield(b'--frame\r\n'
        #     b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/video')
def video():
    return Response(generate_frames(),mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__=="__main__":
    app.run(debug=True)