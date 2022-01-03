<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meus Projetos</title>
</head>

<body>
    <h2>Meus Projetos</h2>
    <ul class="list-files">
        <?php
        $path = "./Projetos/";
        $files = scandir($path);
        foreach ($files as $key => $value) {

            $name = basename($value,".html");

            if ($value != "." and $value != "..") {
                echo "<li class='item'><a href='{$path}{$value}' target='_blank' rel='noopener noreferrer'>$name</a></li>";
            }
           
        }?>
    </ul>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'poppins';
            font-weight: normal;
        }

        .list-files {
            margin-left: 50px;
            list-style-type: circle;
        }

        .list-files a {
            text-decoration: none;
            text-transform: capitalize;
        }

        .list-files a:hover {
            text-decoration: underline;
        }
    </style>
    <script src="https://kit.fontawesome.com/a222d5ef66.js" crossorigin="anonymous"></script>
</body>

</html>