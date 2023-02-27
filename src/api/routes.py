"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Donut, Bagel, Pastry, Muffin, Coffee
from api.utils import generate_sitemap, APIException

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

    return jsonify(response_body.serialize), 200


@api.route('/donut/<string:flavor>', methods=['GET'])
def get_donut(flavor):
    each_donut = Object.query.filter_by(flavor=flavor).first()

    return jsonify(my_object), 200

@api.route('/bagel', methods=['POST'])
def add_bagel():
    request_body = request.get_json(force=True)
    flavor = request_body.get("flavor")
    price = request_body.get("price")
    quantity = request_body.get("quantity")

    return jsonify(response_body.serialize), 200


@api.route('/bagel/<string:flavor>', methods=['GET'])
def get_bagel(name):
    each_bagel = Object.query.filter_by(flavor=flavor).first()

    return jsonify(my_object.serialize()), 200


@api.route('/pastry', methods=['POST'])
def add_pastry():
    request_body = request.get_json(force=True)
    flavor = request_body.get("flavor")
    price = request_body.get("price")
    quantity = request_body.get("quantity")

    return jsonify(response_body.serialize), 200


@api.route('/pastry/<int:id>', methods=['GET'])
def get_pasty(name):
    each_pastry = Object.query.get(object_id)

    return jsonify(my_object.serialize()), 200

@api.route('/muffin', methods=['POST'])
def add_muffin():
    request_body = request.get_json(force=True)
    flavor = request_body.get("flavor")
    price = request_body.get("price")
    quantity = request_body.get("quantity")

    return jsonify(response_body.serialize), 200


@api.route('/muffin/<int:id>', methods=['GET'])
def get_muffin(name):
    each_muffin = Object.query.get(object_id)

    return jsonify(my_object.serialize()), 200

@api.route('/coffee', methods=['POST'])
def add_coffee():
    request_body = request.get_json(force=True)
    flavor = request_body.get("flavor")
    price = request_body.get("price")
    quantity = request_body.get("quantity")

    return jsonify(response_body.serialize), 200


@api.route('/coffee/<int:id>', methods=['GET'])
def get_coffee(name):
    each_coffee = Object.query.get(object_id)

    return jsonify(my_object.serialize()), 200