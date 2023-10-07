from flask import Flask, render_template, request, jsonify
import model
import numpy as np
import pickle


app=Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))
model2= pickle.load(open('model2.pkl', 'rb'))


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/index.html")
def a():
    return render_template("index.html")

@app.route("/about.html")
def about():
    return render_template("about.html")

@app.route("/survey.html")
def survey():
    return render_template("survey.html")

@app.route("/dyscalculia.html")
def about2():
    return render_template("dyscalculia.html")
@app.route("/quiz.html")
def quiz():
    return render_template("quiz.html")

@app.route("/predict.html")
def hello():
    return render_template("predict.html")

@app.route("/predict2.html")
def hello3():
    return render_template("predict2.html")

@app.route('/predict',methods=['POST'])
def predict():
        int_features = [float(x) for x in request.form.values()]
        final_features = [np.array(int_features)]
        prediction = model.predict(final_features)

        output = round(prediction[0], 2)
        def pred():
            if output==0:
                return "You definately have Dyslexia, Consult a doctor ASAP!"
            elif output==1:
                return "You might have mild Dyslexia, Kindly consult a doctor!!!"
            else:
                return "You don't have Dyslexia!!" 
        return render_template('predict.html', prediction_text=pred())

@app.route('/predict_api',methods=['POST'])
def predict_api():
    
    data = request.get_json(force=True)
    prediction = model.predict([np.array(list(data.values()))])

    output = prediction[0]
    return jsonify(output)

@app.route('/predict2',methods=['POST'])
def predict2():
        int_features2 = [float(x) for x in request.form.values()]
        final_features2 = [np.array(int_features2)]
        prediction2 = model2.predict(final_features2)

        output2 = round(prediction2[0], 2)
        def pred2():
            if output2==0:
                return "You definately have Dyscalculia, Consult a doctor ASAP!"
            elif output2==1:
                return "You might have mild Dyscalculia, Kindly consult a doctor!!!"
            else:
                return "You don't have Dyscalculia!!" 
        return render_template('predict2.html', prediction_text2=pred2())

@app.route('/predict2_api',methods=['POST'])
def predict2_api():
   
    data2 = request.get_json(force=True)
    prediction2 = model2.predict([np.array(list(data2.values()))])

    output2 = prediction2[0]
    return jsonify(output2)


if __name__=="__main__":
    app.run(debug=True)
