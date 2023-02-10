import pyrebase
import time

firebaseConfig = {
    'apiKey': "AIzaSyAUnep_ZfG7Un9i8QvH7QbN0BncQ5d2Xfc",
    'authDomain': "employher-6a9cc.firebaseapp.com",
    'projectId': "employher-6a9cc",
    'storageBucket': "employher-6a9cc.appspot.com",
    'messagingSenderId': "18908605232",
    'appId': "1:18908605232:web:62b4deeaef3ebef5e8f6f5",
    'databaseURL': "https://employher-6a9cc-default-rtdb.firebaseio.com"
}

firebase = pyrebase.initialize_app(firebaseConfig)

db = firebase.database()
# auth = firebase.auth()
# storage = firebase.storage()

#Database
# data = {
#     'companyName': "Google",
#     'companyUrl': "Google.com",
#     'jobLink': "https://www.google.com/careers",
#     'location': "Remote",
#     'postedOn': time.time(),
#     'skills': ["React" , "Javascript"],
#     'title': "Frontend Developer",
#     'type': "Full Time"
# }

# #create
# db.child("jobs").push(data)
#db.child("jobs").child("myid").set(data)

#update
# db.child("jobs").child("id").update({'title':'FrontendDev'})