<?php
class nomina{
    public string $p_nombre;
    public float $p_sueldo;
    public float $p_dias;
    public function __construct(string $vNombre,float $vSueldo,float $vDias)
    {
        $this->p_nombre = $vNombre;
        $this->p_sueldo = $vSueldo;
        $this->p_dias   = $vDias;
    }

    public function liquidar_nomina(){
        $totalDev = $this->p_sueldo/30*$this->p_dias;
        $salud = $this->p_sueldo*4/100;
        $pension = $this->p_sueldo*4/100;
        $neto = $totalDev-$salud-$pension;
        $resul ="Liquidacion de nomina".PHP_EOL;
        $resul.= "Empleado ----------->".$this->p_nombre.PHP_EOL;
        $resul.= "Sueldo   ----------->".$this->p_sueldo.PHP_EOL;
        $resul.= "Días Trabajados  --->".$this->p_dias.PHP_EOL;
        $resul.= "Total Devengado  --->".$totalDev.PHP_EOL;
        $resul.= "Descuento Salud  --->".$salud.PHP_EOL;
        $resul.= "Descuento Pensión -->".$pension.PHP_EOL;
        $resul.= "Neto a cancelar  --->".$neto.PHP_EOL;
        return $resul;
    }
}
$nom=$_POST['nombre'] ?? '';
$sueldo=$_POST['sueldo'] ?? 0;
$dias=$_POST['dias'] ?? 0;

$fliq=new nomina($nom,$sueldo,$dias);

echo ($fliq->liquidar_nomina());
?>
