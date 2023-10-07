from sklearn.svm import SVC
from sklearn.model_selection import train_test_split
import numpy as np
import pandas as pd
from sklearn.model_selection import GridSearchCV
from sklearn.ensemble import RandomForestClassifier

from sklearn.preprocessing import StandardScaler
import pickle
from sklearn.metrics import classification_report

#Reading the dataset
data=pd.read_csv('dyscalculia_dataset.csv')
#Value to be predicted by the model.
y=data.Label 
#Input taken by the model.
X=data.drop(['Label'],axis=1) 
data.head()
X_train,X_test,y_train,y_test=train_test_split(X,y,test_size=0.8,random_state=10)

sc=StandardScaler(copy=False)
sc.fit_transform(X_train)
sc.transform(X_test)

#Creating a list of possible n_estimators.
n_est = {'n_estimators' : [10,100,500,1000]}
#Creating a RandomForest model using the value of n_estimators given by GridSearch for best result.
model2 = GridSearchCV(RandomForestClassifier(random_state=0),n_est,scoring='f1_macro')
#Training the model
model2.fit(X_train, y_train)

pickle.dump(model2, open('model2.pkl','wb'))