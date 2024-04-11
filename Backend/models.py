from app import db, app, User

with app.app_context():
    db.create_all()
    # user = User.query.all()
    # print(user)

