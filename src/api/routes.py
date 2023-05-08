"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Donut, Bagel, Pastry, Muffin, Coffee, Date
from api.utils import generate_sitemap, APIException
from urllib.parse import unquote

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/donut', methods=['POST'])
def add_donut():
    request_body = request.get_json(force=True)
    flavor = request_body.get("flavor")
    price = request_body.get("price")
    quantity = request_body.get("quantity")

    return jsonify(response_body), 200

@api.route('/donuts', methods=['GET'])
def get_all_donuts():
    donuts = Donut.query.all()
    all_donuts = list(map(lambda donut: donut.serialize(), donuts))
    return jsonify(all_donuts), 200

@api.route('/donut/<string:donut_flavor>', methods=['GET'])
def get_donut(donut_flavor):
    request_body = request.get_json(force=True)
    donut_flavor = request_body.get("flavor")
    donut = Donut.query.filter_by(flavor=donut_flavor).first()

    return jsonify(donut.serialize()), 200

@api.route('/bagel', methods=['POST'])
def add_bagel():
    request_body = request.get_json(force=True)
    flavor = request_body.get("flavor")
    price = request_body.get("price")
    quantity = request_body.get("quantity")

    return jsonify(response_body), 200

@api.route('/bagels', methods=['GET'])
def get_all_bagels():
    bagels = Bagel.query.all()
    all_bagels = list(map(lambda bagel: bagel.serialize(), bagels))
    return jsonify(all_bagels), 200

@api.route('/bagel/<string:flavor>', methods=['GET'])
def get_bagel(name):
    each_bagel = Bagel.query.filter_by(flavor=flavor).first()

    return jsonify(each_bagel), 200


@api.route('/pastry', methods=['POST'])
def add_pastry():
    request_body = request.get_json(force=True)
    flavor = request_body.get("flavor")
    price = request_body.get("price")
    quantity = request_body.get("quantity")

    return jsonify(response_body.serialize), 200

@api.route('/pasteries', methods=['GET'])
def get_all_pasteries():
    pasteries = Pastry.query.all()
    all_pasteries = list(map(lambda pastry: pastry.serialize(), pasteries))
    return jsonify(all_pasteries), 200

@api.route('/pastry/<string:flavor>', methods=['GET'])
def get_pasty(name):
    each_pastry = Pastry.query.filter_by(flavor=flavor).first()

    return jsonify(each_pastry), 200

@api.route('/muffin', methods=['POST'])
def add_muffin():
    request_body = request.get_json(force=True)
    flavor = request_body.get("flavor")
    price = request_body.get("price")
    quantity = request_body.get("quantity")

    return jsonify(response_body.serialize), 200


@api.route('/muffins', methods=['GET'])
def get_all_muffins():
    muffins = Muffin.query.all()
    all_muffins = list(map(lambda muffin: muffin.serialize(), muffins))
    return jsonify(all_muffins), 200

@api.route('/muffin/<string:flavor>', methods=['GET'])
def get_muffin(name):
    each_muffin = Muffin.query.filter_by(flavor=flavor).first()

    return jsonify(each_muffin), 200

@api.route('/coffee', methods=['POST'])
def add_coffee():
    request_body = request.get_json(force=True)
    flavor = request_body.get("flavor")
    price = request_body.get("price")
    quantity = request_body.get("quantity")

    return jsonify(response_body.serialize), 200

@api.route('/coffees', methods=['GET'])
def get_all_coffee():
    coffees = Coffee.query.all()
    all_coffees = list(map(lambda coffee: coffee.serialize(), coffees))
    return jsonify(all_coffees), 200

@api.route('/coffee/<string:flavor>', methods=['GET'])
def get_coffee(name):
    each_coffee = Coffee.query.filter_by(flavor=flavor).first()

    return jsonify(each_coffee), 200

@api.route('/stock/<string:treat>/<string:flavor>/<int:amount>', methods=["GET"])
def get_stock(treat,flavor,amount):
    store_date = Date.query.all()
    print ("STORE DATE",store_date)
    if treat == "donuts":
        donut = Donut.query.filter_by(flavor=unquote(donut_flavor).title()).first()
        if donut.quantity >= int(amount):
            return jsonify("Added Successfully"), 200
        return jsonify("Not enough stock"), 400 
    elif treat == "bagels":
        bagel = Bagel.query.filter_by(flavor=unquote(bagel_flavor.title())).first()
        if bagel.quantity >= amount:
            return jsonify("Added Successfully"), 200
        return jsonify("Not enough stock"), 400 
    elif treat == "pasteries":
        pasteries = Pasteries.query.filter_by(flavor=unquote(pasteries_flavor.title())).first()
        if pasteries.quantity >= amount:
            return jsonify("Added Successfully"), 200
        return jsonify("Not enough stock"), 400 
    elif treat == "muffin":
        muffin = muffin.query.filter_by(flavor=unquote(muffin_flavor).title()).first()
        if muffin.quantity >= amount:
            return jsonify("Added Successfully"), 200
        return jsonify("Not enough stock"), 400 
    elif treat == "coffee":
        coffee = Coffee.query.filter_by(flavor=unquote(coffee_flavor).title()).first()
        if coffee.quantity >= amount:
            return jsonify("Added Successfully"), 200
        return jsonify("Not enough stock"), 400 
    else:
        return jsonify("stock not found"), 400
    
    
@api.route('/stock/order', methods=['PUT'])
def place_order():
    request_body = request.get_json()
    order_items = request_body['cart']
    for item in order_items: 
        total= item["quantity"]
        amount= int(total)
        print(item, "ITEMMMM")
        if item["treat"] == "Donuts":
            donut = Donut.query.filter_by(flavor=unquote(item["flavor"]).title()).first()
            print(donut, "donut")
            if donut.quantity >= amount:
                donut.quantity -= amount 
                db.session.commit()
                return jsonify("Added Successfully"), 200
            return jsonify("Not enough stock"), 400 
        elif item["treat"] == "Bagels":
            bagel = Bagel.query.filter_by(flavor=unquote(item["flavor"]).title()).first()
            if bagel.quantity >= amount:
                bagel.quantity -= amount
                db.session.commit()               
                return jsonify("Added Successfully"), 200
            return jsonify("Not enough stock"), 400 
        elif item["treat"] == "pasteries":
            pasteries = Pasteries.query.filter_by(flavor=unquote(item["flavor"]).title()).first()
            if pasteries.quantity >= amount:
                pastries.quantity -= amount 
                db.session.commit()
                return jsonify("Added Successfully"), 200
            return jsonify("Not enough stock"), 400 
        elif item["treat"] == "muffin":
            muffin = muffin.query.filter_by(flavor=unquote(item["flavor"]).title()).first()
            if muffin.quantity >= amount:
                muffin.quantity -= amount 
                db.session.commit()
                return jsonify("Added Successfully"), 200
            return jsonify("Not enough stock"), 400 
        elif item["treat"] == "coffee":
            coffee = Coffee.query.filter_by(flavor=unquote(item["flavor"]).title()).first()
            if coffee.quantity >= amount:
                coffee.quantity -= amount  
                db.session.commit()   
                return jsonify("Added Successfully"), 200
            return jsonify("Not enough stock"), 400 
        
@api.route("/stock/reset", methods=["PUT"])
def reset_stock():
    donut_glazed = Donut.query.filter_by(flavor=unquote("Glazed").title()).first()
    donut_glazed.quantity = 300
    
    db.session.commit()
    