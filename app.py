from flask import *
from main import *

app = Flask(__name__)

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

@app.route('/' , methods=['GET' , 'POST'])
def basic():
    if request.method == 'POST':
        name = request.form['name']
        db.child("jobs").push(data)
        jobs = db.child("jobs").get()
        j = jobs.val()
        return render_template('index.html' , t = j.values())
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)