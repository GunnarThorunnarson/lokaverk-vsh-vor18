from flask import render_template, flash, redirect, url_for
from late import app

@app.route('/')
def index():
  return render_template('index.html', title='title')
