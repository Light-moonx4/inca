<?php
header('Access-Control-Allow-Origin: *');// quien dominio la puede consumir
header('Content-Type: application/json; charset=UTF-8'); // recibe informacion en formato json
header('Access-Control-Allow-Methods: POST, OPTIONS, GET, PUT, DELETE');//metodo que se soporta la api
header('Access-Control-Max-Age: 3600');//tiempo en cache 3600 seg=1 hora
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');//cabeceras que se permiten
class nominajson{
    public string $p_nombre;
    public float $p_sueldo;
    public float $p_dias;
    public function __construct()
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $this->p_nombre = $data['nombre'] ?? '';
        $this->p_sueldo = $data['sueldo'] ?? 0;
        $this->p_dias   = $data['dias'] ?? 0;
    }

    public function liquidar_nomina(){
        $totalDev = $this->p_sueldo/30*$this->p_dias;
        $salud = $this->p_sueldo*4/100;
        $pension = $this->p_sueldo*4/100;
        $neto = $totalDev-$salud-$pension;
        $aDatos=[
            "titulo"           =>"Liquidacion de nomina",
            "Empleado"         =>$this->p_nombre,
            "Sueldo"           =>$this->p_sueldo,
            "Diastrabajando"   =>$this->p_dias,
            "TotalDevengado"   =>$totalDev,
            "DescuentoSalud"   =>$salud,
            "DescuentoPension" =>$pension,
            "NetoACancelar"    =>$neto
        ];
        return $aDatos;


    }
}

$fliq=new nominajson();

echo (json_encode($fliq->liquidar_nomina()));
?>
