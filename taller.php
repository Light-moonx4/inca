<?php
header('Access-Control-Allow-Origin: *'); // Qué dominio la puede consumir
header('Content-Type: application/json; charset=UTF-8'); // Devuelve y recibe información en formato json
header('Access-Control-Allow-Methods: POST, OPTIONS, GET, PUT, DELETE'); // Métodos que soporta la API
header('Access-Control-Max-Age: 3600'); // Tiempo en caché 3600 seg = 1 hora
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'); // Cabeceras permitidas

class taller {
    public float $p_numeroencuestas;
    public int $p_personasestrato0;
    public int $p_personasestrato1;
    public int $p_personasestrato2;
    public int $p_viviendapropia;
    public int $p_viviendaarrendada;
    public int $p_viviendafamiliar;
    public int $p_numerototalhijos;
    public int $p_hombres;
    public int $p_mujeres;
    public int $p_nivelestudioprofesional;
    public int $p_nivelestudiospostgrado;
    public int $p_nivelestudiobasico;

    public function __construct() {
        // Intenta leer datos enviados por JSON (POST/PUT), de lo contrario usa los valores por defecto del ejercicio
        $inputData = json_decode(file_get_contents('php://input'), true);
        
        $data = !empty($inputData) ? $inputData : [
            "numeroencuestas" => 2500,
            "personasestrato0" => 1000,
            "personasestrato1" => 1200,
            "personasestrato2" => 300,
            "viviendapropia" => 1050,
            "viviendaarrendada" => 1000,
            "viviendafamiliar" => 450,
            "numerototalhijos" => 6500,
            "hombres" => 1200,
            "mujeres" => 1300,
            "nivelestudioprofesional" => 1000,
            "nivelestudiospostgrado" => 400,
            "nivelestudiobasico" => 1100
        ];

        $this->p_numeroencuestas          = $data['numeroencuestas'] ?? 2500;
        $this->p_personasestrato0         = $data['personasestrato0'] ?? 0;
        $this->p_personasestrato1         = $data['personasestrato1'] ?? 0;
        $this->p_personasestrato2         = $data['personasestrato2'] ?? 0;
        $this->p_viviendapropia           = $data['viviendapropia'] ?? 0;
        $this->p_viviendaarrendada        = $data['viviendaarrendada'] ?? 0;
        $this->p_viviendafamiliar         = $data['viviendafamiliar'] ?? 0;
        $this->p_numerototalhijos         = $data['numerototalhijos'] ?? 0;
        $this->p_hombres                  = $data['hombres'] ?? 0;
        $this->p_mujeres                  = $data['mujeres'] ?? 0;
        $this->p_nivelestudioprofesional  = $data['nivelestudioprofesional'] ?? 0;
        $this->p_nivelestudiospostgrado   = $data['nivelestudiospostgrado'] ?? 0;
        $this->p_nivelestudiobasico       = $data['nivelestudiobasico'] ?? 0;
    }

    private function calcularPorcentaje($valor) {
        if ($this->p_numeroencuestas == 0) return 0;
        return round(($valor / $this->p_numeroencuestas) * 100, 2);
    }

    public function tabular_resultados() {
        $aDatos = [
            "titulo" => "Tabulacion de Resultados Encuesta DANE",
            "total_encuestas_procesadas" => $this->p_numeroencuestas,
            "porcentajes" => [
                "personas_estrato_0"      => $this->calcularPorcentaje($this->p_personasestrato0) . "%",
                "personas_estrato_1"      => $this->calcularPorcentaje($this->p_personasestrato1) . "%",
                "personas_estrato_2"      => $this->calcularPorcentaje($this->p_personasestrato2) . "%",
                "vivienda_propia"         => $this->calcularPorcentaje($this->p_viviendapropia) . "%",
                "vivienda_arrendada"      => $this->calcularPorcentaje($this->p_viviendaarrendada) . "%",
                "vivienda_familiar"       => $this->calcularPorcentaje($this->p_viviendafamiliar) . "%",
                "promedio_hijos_por_encuesta" => round($this->p_numerototalhijos / ($this->p_numeroencuestas > 0 ? $this->p_numeroencuestas : 1), 2),
                "hombres"                 => $this->calcularPorcentaje($this->p_hombres) . "%",
                "mujeres"                 => $this->calcularPorcentaje($this->p_mujeres) . "%",
                "nivel_estudio_basico"    => $this->calcularPorcentaje($this->p_nivelestudiobasico) . "%",
                "nivel_estudio_profesional" => $this->calcularPorcentaje($this->p_nivelestudioprofesional) . "%",
                "nivel_estudio_postgrado" => $this->calcularPorcentaje($this->p_nivelestudiospostgrado) . "%"
            ]
        ];

        return $aDatos;
    }
}

// Instanciación de la clase y respuesta en JSON
$taller = new taller();
echo json_encode($taller->tabular_resultados(), JSON_UNESCAPED_UNICODE);
?>