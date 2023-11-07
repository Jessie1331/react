from flask import Flask, request, abort
from config import Me
from mock_data import catalog, coupon_codes
import json


app = Flask(__name__)
@app.get("/api")
def index():
    return "Hello from Flask!"

@app.get("/test")
def test():
    return "Test"

@app.post("/api/version")
def version():
    v = {
        "version": "1.0.0"
        "name" ""
    }
    return json.dumps(v)

@app.get("/api/about")
def about():
    return json.dumps()

app.run(debug=True)



@app.get("/app/product/<cat>")
def get_by_catagory(cats):
    results = []
    for prod in catalog:
          if prod['catagory'] == cats:
              results.append(prod)

    return json.dumps(results)

    
    #serch exact name

@app.get("/app/product/search/<term>")
def product_search(term):
    results = []
    for prod in catalog:
          if prod['title'] == term:
              results.append(prod)

    return json.dumps(results)  
#serch term in name
@app.get("/app/product/search/<term>")
def product_search(term):
    results = []
    for prod in catalog:
          if term.lower() in prod['title'].lower:
              results.append(prod)

    return json.dumps(results)

#lower price then given number
@app.get("/api/product/lower/<price>")
def product_lower(price):
    results = []
    real_price = float(price)

    return json.dumps(results)


#get api coupons
@app.get("/api/coupons")
def get_coupons():
    return json.dumps(coupon_codes)


#save coupon
@app.getpost("api/coupons")
def save_coupon():
    coupon = request.get_json()
    coupon._id = len(coupon_codes)

    coupon_codes.append(coupon)
    return json.dumps(coupon)



#serch and return 
@app.get("api/coupon/<code>")
def search_coupon(code):
    for coupon in coupon_codes:
        if coupon['code'].lower() == code.lower():
            return json.dumps(coupon)
        return abort(404,"invalid Coupon Code")