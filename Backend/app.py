from flask import Flask, jsonify, request, session, make_response, render_template, json
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqldb://root:root@localhost/gebakoo_dev_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

bcrypt = Bcrypt(app) 
db = SQLAlchemy()
db.init_app(app)

CORS(app)

class User(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  firstname = db.Column(db.String(80), nullable=False)
  lastname = db.Column(db.String(80), nullable=False)
  username = db.Column(db.String(80), unique=True, nullable=False)
  email = db.Column(db.String(100), unique=True, nullable=False)
  password = db.Column(db.String(100))

  def __repr__(self):
    return f"<User: {self.email}>"

@app.route('/register', methods=['POST'])
def register():
  request_data = request.json
  firstName = request_data.get('firstName')
  lastName = request_data.get('lastName')
  userName = request_data.get('userName')
  email = request_data.get('email')
  password = request_data.get('password')

  user_exists = User.query.filter_by(email=email).first() is not None
 
  if user_exists:
    return jsonify({"error": "Email already exists"}), 409
  
  hashed_password = bcrypt.generate_password_hash(password)
  user = User(firstname=firstName, lastname=lastName, username=userName, email=email, password=hashed_password)
  db.session.add(user)
  db.session.commit()

  return {'201': 'created successfully'}

@app.route("/login", methods=["GET", "POST"])
def login():
    email = request.json["email"]
    password = request.json["password"]
  
    user = User.query.filter_by(email=email).first()
  
    if user is None:
        return jsonify({"error": "Unauthorized Access"}), 401
       
  
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401
      
    session["user_id"] = user.id
  
    return jsonify({
        "id": user.id,
        "email": user.email
    })

if __name__ == "__main__":
  app.run(host='0.0.0.0', port=5000)
