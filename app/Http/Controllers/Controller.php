<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use App\Models\Cat\Municipio;

class Controller extends BaseController
{
    public function home(){
        $bannerImg = $this->getfiles("img/banner");
        $municipios = Municipio::where('id_edo',11)
                        ->orderBy('mpio_desc')
                        ->get();
        return view('home', ['municipios'=>$municipios,'bannerImg'=>$bannerImg]);
    }

    private function getfiles($path){
        $result = array();
        $files = scandir($path);
        foreach ($files as $key => $value)
        {
            if (!in_array($value,array(".","..")))
            {
                $result[]=$value;
            }
        }
        return $result;
    }
}
