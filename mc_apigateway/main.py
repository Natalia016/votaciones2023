from flask import Flask
from flask import jsonify
from flask import request
from flask_cors import CORS
import json
from waitress import serve
import datetime
import requests
import re

app=Flask(__name__)

cors=CORS(app)

from flask_jwt_extended import create_access_token, verify_jwt_in_request
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

app.config["JWT_SECRET_KEY"]="super-secret"  # Cambiar por el que seconveniente
jwt=JWTManager(app)


@app.route("/hola", methods=['GET'])
def test():
    json={}
    json["message"]="Server running ..."
    return jsonify(json)


# Mesas


@app.route("/mesas", methods=['GET'])
def getMesas():
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-registraduria"]+'/mesas'
    response=requests.get(url, headers=headers)
    json=response.json()
    return jsonify(json)


@app.route("/mesas", methods=['POST'])
def crearMesa():
    data=request.get_json()
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-registraduria"]+'/mesas'
    response=requests.post(url, headers=headers, json=data)
    json=response.json()
    return jsonify(json)


@app.route("/mesas/<string:id>", methods=['GET'])
def getMesa(id):
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-registraduria"]+'/mesas/'+id
    response=requests.get(url, headers=headers)
    json=response.json()
    return jsonify(json)


@app.route("/mesas/<string:id>", methods=['PUT'])
def modificarMesa(id):
    data=request.get_json()
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-registraduria"]+'/mesas/'+id
    response=requests.put(url, headers=headers, json=data)
    json=response.json()
    return jsonify(json)


@app.route("/mesas/<string:id>", methods=['DELETE'])
def eliminarMesas(id):
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-registraduria"]+'/mesas/'+id
    response=requests.delete(url, headers=headers)
    json=response.json()
    return jsonify(json)


# Candidatos


@app.route("/candidatos", methods=['GET'])
def getCandidatos():
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-registraduria"]+'/candidatos'
    response=requests.get(url, headers=headers)
    json=response.json()
    return jsonify(json)


@app.route("/candidatos", methods=['POST'])
def crearCandidatos():
    data=request.get_json()
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-registraduria"]+'/candidatos'
    response=requests.post(url, headers=headers, json=data)
    json=response.json()
    return jsonify(json)


@app.route("/candidatos/<string:id>", methods=['GET'])
def getCandidato(id):
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-registraduria"]+'/candidatos/'+id
    response=requests.get(url, headers=headers)
    json=response.json()
    return jsonify(json)


@app.route("/candidatos/<string:id>", methods=['PUT'])
def modificarCandidato(id):
    data=request.get_json()
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-registraduria"]+'/candidatos/'+id
    response=requests.put(url, headers=headers, json=data)
    json=response.json()
    return jsonify(json)


@app.route("/candidatos/<string:id>", methods=['DELETE'])
def eliminarCandidato(id):
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-registraduria"]+'/candidatos/'+id
    response=requests.delete(url, headers=headers)
    json=response.json()
    return jsonify(json)


# Partidos


@app.route("/partidos", methods=['GET'])
def getPartidos():
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-registraduria"]+'/partidos'
    response=requests.get(url, headers=headers)
    json=response.json()
    return jsonify(json)


@app.route("/partidos", methods=['POST'])
def crearPartido():
    data=request.get_json()
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-registraduria"]+'/partidos'
    response=requests.post(url, headers=headers, json=data)
    json=response.json()
    return jsonify(json)


@app.route("/partidos/<string:id>", methods=['GET'])
def getPartido(id):
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-registraduria"]+'/partidos/'+id
    response=requests.get(url, headers=headers)
    json=response.json()
    return jsonify(json)


@app.route("/partidos/<string:id>", methods=['PUT'])
def modificarPartido(id):
    data=request.get_json()
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-registraduria"]+'/partidos/'+id
    response=requests.put(url, headers=headers, json=data)
    json=response.json()
    return jsonify(json)


@app.route("/partidos/<string:id>", methods=['DELETE'])
def eliminarPartido(id):
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-registraduria"]+'/partidos/'+id
    response=requests.delete(url, headers=headers)
    json=response.json()
    return jsonify(json)


# Resultados


@app.route("/resultados", methods=['GET'])
def getResultados():
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-registraduria"]+'/resultados'
    response=requests.get(url, headers=headers)
    json=response.json()
    return jsonify(json)


@app.route("/resultados", methods=['POST'])
def crearResultado():
    data=request.get_json()
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-registraduria"]+'/resultados'
    response=requests.post(url, headers=headers, json=data)
    json=response.json()
    return jsonify(json)


@app.route("/resultados/<string:id>", methods=['GET'])
def getResultado(id):
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-registraduria"]+'/resultados/'+id
    response=requests.get(url, headers=headers)
    json=response.json()
    return jsonify(json)


@app.route("/resultados/<string:id>", methods=['PUT'])
def modificarResultado(id):
    data=request.get_json()
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-registraduria"]+'/resultados/'+id
    response=requests.put(url, headers=headers, json=data)
    json=response.json()
    return jsonify(json)


@app.route("/resultados/<string:id>", methods=['DELETE'])
def eliminarResultado(id):
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-registraduria"]+'/resultados/'+id
    response=requests.delete(url, headers=headers)
    json=response.json()
    return jsonify(json)


@app.route("/usuarios", methods=['GET'])
def getUsuarios():
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-security"]+'/usuarios'
    response=requests.get(url, headers=headers)
    json=response.json()
    return jsonify(json)


@app.route("/usuarios/<string:id>", methods=['GET'])
def getUsuario(id):
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-security"]+'/usuarios/'+id
    response=requests.get(url, headers=headers)
    json=response.json()
    return jsonify(json)


@app.route("/usuarios", methods=['POST'])
def crearUsuario():
    data=request.get_json()
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-security"]+'/usuarios'
    response=requests.post(url, headers=headers, json=data)
    json=response.json()
    return jsonify(json)


@app.route("/usuarios/<string:id>", methods=['PUT'])
def modificarUsuarios(id):
    data=request.get_json()
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-security"]+'/usuarios/'+id
    response=requests.put(url, headers=headers, json=data)
    json=response.json()
    return jsonify(json)


@app.route("/usuarios/<string:id>", methods=['DELETE'])
def eliminarUsuarios(id):
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-security"]+'/usuarios/'+id
    response=requests.delete(url, headers=headers)
    json=response.json()
    return jsonify(json)


@app.route("/permisos", methods=['GET'])
def getPermisos():
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-security"]+'/permisos'
    response=requests.get(url, headers=headers)
    json=response.json()
    return jsonify(json)


@app.route("/permisos", methods=['POST'])
def crearPermisos():
    data=request.get_json()
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-security"]+'/permisos'
    response=requests.post(url, headers=headers, json=data)
    json=response.json()
    return jsonify(json)


@app.route("/permisos/<string:id>", methods=['PUT'])
def modificarPermisos(id):
    data=request.get_json()
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-security"]+'/permisos/'+id
    response=requests.put(url, headers=headers, json=data)
    json=response.json()
    return jsonify(json)


@app.route("/permisos/<string:id>", methods=['DELETE'])
def eliminarPermisos(id):
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-security"]+'/permisos/'+id
    response=requests.delete(url, headers=headers)
    json=response.json()
    return jsonify(json)


@app.route("/roles", methods=['GET'])
def getRoles():
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-security"]+'/roles'
    response=requests.get(url, headers=headers)
    json=response.json()
    return jsonify(json)


@app.route("/roles", methods=['POST'])
def crearRoles():
    data=request.get_json()
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-security"]+'/roles'
    response=requests.post(url, headers=headers, json=data)
    json=response.json()
    return jsonify(json)


@app.route("/roles/<string:id>", methods=['PUT'])
def modificarRoles(id):
    data=request.get_json()
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-security"]+'/roles/'+id
    response=requests.put(url, headers=headers, json=data)
    json=response.json()
    return jsonify(json)


@app.route("/login", methods=["POST"])
def create_token():
    data=request.get_json()
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    url=dataConfig["url-backend-security"]+'/usuarios/validar'
    response=requests.post(url, json=data, headers=headers)
    if response.status_code == 200:
        user=response.json()
        expires=datetime.timedelta(seconds=60 * 60 * 24)
        access_token=create_access_token(identity=user, expires_delta=expires)
        return jsonify({
            "token": access_token,
            "user_id": user["_id"]})
    else:
        return jsonify({
            "msg": "Bad username or password"}), 401


# Funcion que se ejecutará siempre de primero antes de que la consulta llegue a la ruta solicitada
@app.before_request
def before_request_callback():
    endPoint=limpiarURL(request.path)
    excludedRoutes=["/login"]
    if excludedRoutes.__contains__(request.path):
        pass
    elif verify_jwt_in_request():
        usuario=get_jwt_identity()
        if usuario["rol"] is not None:
            tienePersmiso=validarPermiso(endPoint, request.method, usuario["rol"]["_id"])
            if not tienePersmiso:
                return jsonify({
                    "message": "Permission denied "}), 401
        else:
            return jsonify({
                "message": "Permission denied"}), 401


def limpiarURL(url):
    partes=url.split("/")
    for laParte in partes:
        if re.search('\\d', laParte):
            url=url.replace(laParte, "?")
    return url


def validarPermiso(endPoint, metodo, idRol):
    url=dataConfig["url-backend-security"]+"/permisos-roles/validar-permiso/rol/"+str(idRol)
    tienePermiso=False
    headers={
        "Content-Type": "application/json; charset=utf-8"}
    body={
        "url": endPoint,
        "metodo": metodo
    }
    response=requests.get(url, json=body, headers=headers)
    try:
        data=response.json()
        if ("_id" in data):
            tienePermiso=True
    except:
        pass
    return tienePermiso


def loadFileConfig():
    with open('config.json') as f:
        data=json.load(f)
        return data


if __name__ == '__main__':
    dataConfig=loadFileConfig()
    print("Server running : "+"http://"+dataConfig["url-backend"]+":"+str(dataConfig["port"]))
    serve(app, host=dataConfig["url-backend"], port=dataConfig["port"])
    app.run(host="0.0.0.0", port=4000, debug=True)
