<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Pasta onde estão as ROMs
$romsFolder = 'roms/';

// Extensões suportadas
$supportedExtensions = ['gb', 'gbc', 'gba', 'zip'];

$roms = [];

// Verificar se a pasta existe
if (is_dir($romsFolder)) {
    // Ler todos os arquivos da pasta
    $files = scandir($romsFolder);
    
    foreach ($files as $file) {
        // Ignorar . e ..
        if ($file === '.' || $file === '..') continue;
        
        // Pegar a extensão do arquivo
        $extension = strtolower(pathinfo($file, PATHINFO_EXTENSION));
        
        // Verificar se é uma ROM suportada
        if (in_array($extension, $supportedExtensions)) {
            // Formatar nome do jogo (remover extensão e limpar)
            $gameName = pathinfo($file, PATHINFO_FILENAME);
            $gameName = str_replace(['_', '-'], ' ', $gameName);
            $gameName = ucwords($gameName);
            
            $roms[] = [
                'file' => $file,
                'name' => $gameName,
                'path' => $romsFolder . $file,
                'extension' => $extension
            ];
        }
    }
    
    // Ordenar por nome
    usort($roms, function($a, $b) {
        return strcasecmp($a['name'], $b['name']);
    });
}

// Retornar JSON
echo json_encode([
    'success' => true,
    'count' => count($roms),
    'roms' => $roms
]);
?>
