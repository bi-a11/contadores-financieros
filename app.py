from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText

app = Flask(__name__)

@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    message = data.get('message')

    smtp_server = 'smtp.office365.com'
    smtp_port = 587
    sender_email = 'jesusalejandrojuarezhernandez@gmai.com'
    sender_password = 'CND526045s#'  # ⚠ usa variable de entorno en producción

    content = f'''
    Nombre: {name}
    Email: {email}
    Teléfono: {phone}
    Mensaje: {message}
    '''

    msg = MIMEText(content)
    msg['Subject'] = 'Nuevo mensaje desde formulario'
    msg['From'] = sender_email
    msg['To'] = 'jesusalejandrojuarezhernandez@gmail.com'

    try:
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(sender_email, sender_password)
        server.sendmail(sender_email, msg['To'], msg.as_string())
        server.quit()
        return jsonify({'message': 'Correo enviado correctamente'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
