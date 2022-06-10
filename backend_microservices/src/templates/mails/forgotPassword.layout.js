const forgotPasswordLayout = (firstname) => {
    return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Email</title> <!-- Not Needed, Erase -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
    <style type="text/css">
        body {
            margin: 0;
            padding: 0;
            background-color: #eeeeee;
            font-family: 'Sora', sans-serif;
        }

        table {
            border-spacing: 0;
        }

        td {
            padding: 0;
        }

        img {
            border: 0;
        }

        .wrapper {
            width: 100%;
            table-layout: fixed;
            background-color: #ffffff;
            padding-bottom: 40px;
        }

        .webkit {
            max-width: 600px;   
            background-color: #eeeeee;
        }

        .outer {
            margin: 0;
            width: 100%;
            max-width: 600px;
            border-spacing: 0;
        }

        .padding {
            padding: 15px 30px;
            color: #000000;
        }

        .mailbody {
            color: #000000;
            padding: 0 20px 15px;
        }

        .details {
            color: #220050;
        }

        .content {
            margin: 10px;
            padding: 0 20px 50px;
            background-color: #ffffff;
            border-radius: 20px;
        }

        @media screen and (max-width: 600px) {}

        @media screen and (max-width: 400px) {}
    </style>
</head>

<body>
    <center class="wrapper">
        <div class="webkit">
            <table class="outer" align="center">
                <tr>
                    <td>
                        <table width="100%" style="border-spacing: 0;">
                            <tr>
                                <td style="background-color: #eeeeee; padding: 20px 40px 0; text-align: left;">
                                    <a href="http://facturandote.com/"><img
                                            src="https://i.ibb.co/2y1hJn1/Intecel-sin-fondo.png" width="120px"
                                            alt="Intecel" title="Intecel"></a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table width="100%" style="border-spacing: 0;">
                            <tr>
                                <td class="padding">
                                    <table align="center" class="details">
                                        <tr>
                                            <td>
                                                <table align="center" class="content">
                                                    <tr>
                                                        <td>
                                                            <p style="font-size: 18px; font-weight: 500;">Hola,
                                                                ${firstname}.</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p class="mailbody">Se ha realizado una solicitud de restablecimiento de 
                                                                contraseña en tu cuenta de Intecel.</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p style="color: #000000;padding: 0 20px; margin-bottom: 40px;">Haz click en el siguiente
                                                            enlace para continuar:</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <a href="#" style="margin: 0 120px; padding: 20px 25px; outline: none; border: none; 
                                                                border-radius: 15px; background-color: #220050; color: #ffffff; font-size: 16px;
                                                                text-decoration: none;">Restablecer 
                                                                Contraseña</a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p style="color: #000000; padding: 0 20px">Si no realizaste esta solicitud, 
                                                    <a href="#" target="_blank" style="text-decoration: none; color: #220050;">haz click aquí</a>.</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p class="mailbody" style="color: #220050;"><span style="color: #000000;">Gracias.</span> <br> 
                                                    El equipo de Intecel.</p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>
                        <table width="100%"
                            style="background-color: #eeeeee; border-spacing: 0; color: #000000; font-size: 14px;">
                            <tr>
                                <td style="padding: 20px; text-align: center;">
                                    <a href="http://facturandote.com/"><img
                                            src="https://i.ibb.co/2y1hJn1/Intecel-sin-fondo.png" width="150px"
                                            alt="Intecel" title="Intecel"></a>
                                    <p style="margin-top: 18px;">20 #277 Miguel Alemán, Mérida, Yucatán, 97148.</p>
                                    <p style="margin-top: 18px; color: #220050; text-decoration: none;">
                                        soporte@inteceltecnologias.com</p>
                                    <p style="margin-top: 18px; color: #220050;">+52 999-927-5000</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    </center>
</body>

</html>
`}

export default forgotPasswordLayout;