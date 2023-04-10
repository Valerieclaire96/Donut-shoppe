
import click
from api.models import db, User, Donut, Bagel, Pastry, Muffin, Coffee
import os
import random
from flask import Flask, request, jsonify, url_for
"""
In this file, you can add as many commands as you want using the @app.cli.command decorator
Flask commands are usefull to run cronjobs or tasks outside of the API but sill in integration 
with youy database, for example: Import the price of bitcoin every night as 12am
"""
def setup_commands(app):
    
    """ 
    This is an example command "insert-test-users" that you can run from the command line
    by typing: $ flask insert-test-users 5
    Note: 5 is the number of users to add
    """
    @app.cli.command("insert-test-users") # name of our command
    @click.argument("count") # argument of out command
    def insert_test_data(count):
        print("Creating test users")
        for x in range(1, int(count) + 1):
            user = User()
            user.email = "test_user" + str(x) + "@test.com"
            user.password = "123456"
            user.is_active = True
            db.session.add(user)
            db.session.commit()
            print("User: ", user.email, " created.")

        print("All test users created")

        ### Insert the code to populate others tables if needed

    @app.cli.command("insert-donuts") # name of our commandrgument of out command
    def insert_donuts():
        donut_list = [
            {
                "flavor": "Glazed",
                "price": 1.5,
                "quantity": 300,
            },
             {
                "flavor": "Chocolate Glazed",
                "price": 1.5,
                "quantity": 100,
            },
             {
                "flavor": "Blueberry",
                "price": 1.5,
                "quantity": 75,
            },
             {
                "flavor": "Chocolate Frosted",
                "price": 2,
                "quantity": 75,
            },
             {
                "flavor": "Vanilla Frosted",
                "price": 2,
                "quantity": 75,
            },
             {
                "flavor": "Strawberry Frosted",
                "price": 2,
                "quantity": 75,
            },
             {
                "flavor": "Cream Filled",
                "price": 2.5,
                "quantity": 50,
            },
             {
                "flavor": "Boston Cream",
                "price": 2.5,
                "quantity": 50,
            },
             {
                "flavor": "Jelly",
                "price": 2.5,
                "quantity": 50,
            },
             {
                "flavor": "Lemon Cream",
                "price": 2.5,
                "quantity": 25,
            },
             {
                "flavor": "Seasonal",
                "price": 2,
                "quantity": 200,
            },
        ]
        for donut in donut_list:
            new_donut = Donut(
                flavor = donut['flavor'],
                price = donut['price'],
                quantity = donut['quantity'],
            )
            db.session.add(new_donut)
            db.session.commit()
    
    @app.cli.command("insert-bagels") # name of our commandrgument of out command
    def insert_bagels():
        bagel_list = [
            {
                "flavor": "Plain",
                "price": 3,
                "quantity": 30,
            },
            {
                "flavor": "Blueberry",
                "price": 3,
                "quantity": 30,
            },
            {
                "flavor": "Everything",
                "price": 3,
                "quantity": 30,
            },
            {
                "flavor": "Cinnamon Raisin",
                "price": 2,
                "quantity": 25,
            },
        ]
    
        for bagel in bagel_list:
            new_bagel = Bagel(
                flavor = bagel['flavor'],
                price = bagel['price'],
                quantity = bagel['quantity'],
            )
            db.session.add(new_bagel)
            db.session.commit()

    @app.cli.command("insert-pastry") # name of our commandrgument of out command
    def insert_pastry():
        pastry_list = [
            {
                "flavor": "Croissant",
                "price": 2,
                "quantity": 50,
            },
            {
                "flavor": "Chocolate Croissant",
                "price": 3,
                "quantity": 50,
            },
            {
                "flavor": "Almond Croissant",
                "price": 3,
                "quantity": 30,
            },
            {
                "flavor": "Bear Claw",
                "price": 3,
                "quantity": 30,
            },
            {
                "flavor": "Maple Log",
                "price": 3,
                "quantity": 20,
            },
            {
                "flavor": "Danish",
                "price": 3,
                "quantity": 20,
            },
            {
                "flavor": "Turnover",
                "price": 3,
                "quantity": 20,
            },
        ]
        for pastry in pastry_list:
            new_pastry = Pastry(
                flavor = pastry['flavor'],
                price = pastry['price'],
                quantity = pastry['quantity'],
            )
            db.session.add(new_pastry)
            db.session.commit()

    @app.cli.command("insert-muffin") # name of our commandrgument of out command
    def insert_muffins():
        muffin_list = [
            {
                "flavor": "Blueberry",
                "price": 3,
                "quantity": 15,
            },
            {
                "flavor": "Poppy Seed",
                "price": 3,
                "quantity": 5,
            },
            {
                "flavor": "Bran",
                "price": 3,
                "quantity": 5,
            },
            {
                "flavor": "Chocolate Chip",
                "price": 3,
                "quantity": 15,
            },
            {
                "flavor": "Mixed Berry",
                "price": 3,
                "quantity": 10,
            },
        ]
        for muffin in muffin_list:
            new_muffin = Muffin(
                flavor = muffin['flavor'],
                price = muffin['price'],
                quantity = muffin['quantity'],
            )
            db.session.add(new_muffin)
            db.session.commit()

    @app.cli.command("insert-coffee") # name of our commandrgument of out command
    def insert_coffee():
        coffee_list = [
            {
                "flavor": "Small (3-5 Servings)",
                "price": 10,
                "quantity": 15,
            },
            {
                "flavor": "Medium (5-10 Servings)",
                "price": 15,
                "quantity": 15,
            },
            {
                "flavor": "Large (10-15 Servings)",
                "price": 20,
                "quantity": 10,
            },
        ]
        for coffee in coffee_list:
            new_coffee = Coffee(
                flavor = coffee['flavor'],
                price = coffee['price'],
                quantity = coffee['quantity'],
            )
            db.session.add(new_coffee)
            db.session.commit()