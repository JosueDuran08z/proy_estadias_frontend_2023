<?php 

class InaebaData2{

    private $managerMongo;
    private $bulk;
    private $query;

    function __construct(){
        $this->getConnection();
    }

    private function getConnection(){
       // $this->managerMongo = new MongoDB\Driver\Manager("mongodb://inaebaMongo:inae$239@172.28.8.81:27017/");
        //$this->managerMongo = new MongoDB\Driver\Manager('mongodb://carlos:admin1@172.28.8.54:27017/?authSource=inaebaData');
       $this->managerMongo = new MongoDB\Driver\Manager('mongodb://inaebaMongoData:M04goD4ta_;@172.31.113.38:27017/?authSource=inaebaData'); 
       $this->bulk = new MongoDB\Driver\BulkWrite;
    }

    public function getManagerMongo(){
        return $this->managerMongo;
    }

    public function getBulkMongo(){
        return $this->bulk;
    }


}

class PostgresData2{
   /* private $host = '172.28.8.54';
    private $port = '5432';
    private $user = 'postgres';
    private $pass = 'admin01';*/
    private $host = '172.31.113.192';
    private $port = '5432';
    private $user = 'postgres';
    private $pass = 'P0$tgr35;_'; 
    private $db  = 'catalogo_prod';
    private $dd2='control_escolar2';
    private $db3='inaeba_security_api';
    private $pg = null;
    Private $pg2=null;
    private $pg3=null;
    private $pg4=null;
    function __construct() {
        $this->setConnect();
        $this->setConnect2();
        $this->setConnect3();
        $this->setConnect4();
    }

    private function setConnect(){
        $dsn = "pgsql:host=$this->host;port=$this->port;dbname=$this->db;";
        $this->pg = new PDO($dsn, $this->user, $this->pass, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
    }

    public function getConnect(){
        return $this->pg;
    }

    private function setConnect2(){
        $this->pg2=pg_connect("host=$this->host port=$this->port dbname=$this->db user=$this->user password=$this->pass");
    }
    public function getConnectCatalogoPG(){
        return $this->pg2;
    }

    private function setConnect3(){
        $this->pg3=pg_connect("host=$this->host port=$this->port dbname=$this->dd2 user=$this->user password=$this->pass");
    }
    public function getConnectControlEscolarPG(){
        return $this->pg3;
    }
    private function setConnect4(){
        $this->pg4=pg_connect("host=$this->host port=$this->port dbname=$this->db3 user=$this->user password=$this->pass");
    }
    public function getConnectAppySecurityPG(){
        return $this->pg4;
    }

}


Class cambia_datos{

    public function obtenTipoAtencion($id){
          $id_convertido="";
        if($id==0){$id_convertido=5;}
        if($id==3){$id_convertido=1;}
        if($id==4){$id_convertido=2;}
        if($id==5){$id_convertido=3;}
        if($id==7){$id_convertido=4;}
        if($id==14){$id_convertido=6;}
        if($id==15){$id_convertido=7;}
        if($id==16){$id_convertido=8;}
        
        return $id_convertido;
    } 

    public function obtenServicioEducativo($clave){
        $id_servicio_convertido="";
        if($clave=='A'){$id_servicio_convertido=4;}
        if($clave=='P'){$id_servicio_convertido=5;}
        if($clave=='S'){$id_servicio_convertido=6;}
        
        return $id_servicio_convertido;
    }

    public function obtenServicioEducativoEdu($clave){
        $id_servicio_convertido="";
        if($clave=='A'){$id_servicio_convertido=4;}
        if($clave=='P'){$id_servicio_convertido=5;}
        if($clave=='S'){$id_servicio_convertido=6;}
        
        return $id_servicio_convertido;
    }

    public function obtenGrupoEtareo($edad){
        $id_edad="";
        if(($edad>=10) and ($edad<=14)){ $id_edad=1;}
        if(($edad>=15) and ($edad<=25)){ $id_edad=2;}
        if(($edad>=26) and ($edad<=50)){ $id_edad=3;}
        if(($edad>=51) and ($edad<=999)){ $id_edad=4;}
        return $id_edad;
    }
    public function obtenIdServicioGrupoEtareo($idservicio, $idgrupoetareo){
        $id_servicio_grupo_etareo="";

        if(($idservicio==4) and ($idgrupoetareo==1)){$id_servicio_grupo_etareo=13;}
        if(($idservicio==4) and ($idgrupoetareo==2)){$id_servicio_grupo_etareo=14;}
        if(($idservicio==4) and ($idgrupoetareo==3)){$id_servicio_grupo_etareo=15;}
        if(($idservicio==4) and ($idgrupoetareo==4)){$id_servicio_grupo_etareo=16;}

        if(($idservicio==5) and ($idgrupoetareo==1)){$id_servicio_grupo_etareo=17;}
        if(($idservicio==5) and ($idgrupoetareo==2)){$id_servicio_grupo_etareo=18;}
        if(($idservicio==5) and ($idgrupoetareo==3)){$id_servicio_grupo_etareo=19;}
        if(($idservicio==5) and ($idgrupoetareo==4)){$id_servicio_grupo_etareo=20;}

        if(($idservicio==6) and ($idgrupoetareo==1)){$id_servicio_grupo_etareo=21;}
        if(($idservicio==6) and ($idgrupoetareo==2)){$id_servicio_grupo_etareo=22;}
        if(($idservicio==6) and ($idgrupoetareo==3)){$id_servicio_grupo_etareo=23;}
        if(($idservicio==6) and ($idgrupoetareo==4)){$id_servicio_grupo_etareo=24;}
        return $id_servicio_grupo_etareo;
    }

    public function obtenerIdEsquemaEvaluacion($esquema){
        $id_esquema=0;
        if($esquema=='AG'){$id_esquema=10;}
        if($esquema=='GG'){$id_esquema=11;}
        if($esquema=='GN'){$id_esquema=12;}
        if($esquema=='EDU'){$id_esquema=13;}
        return $id_esquema;
    }

    public function obtenerIdGrado($servicio, $grado, $esquema){
        $idgrado=0;
        if($esquema==10){
            if(($servicio==4) and ($grado==1)){$idgrado=1;}
            if(($servicio==4) and ($grado==2)){$idgrado=2;}
            if(($servicio==4) and ($grado==3)){$idgrado=3;}
            if(($servicio==5) and ($grado==1)){$idgrado=4;}
            if(($servicio==5) and ($grado==2)){$idgrado=5;}
            if(($servicio==5) and ($grado==3)){$idgrado=6;}
            if(($servicio==6) and ($grado==1)){$idgrado=7;}
            if(($servicio==6) and ($grado==2)){$idgrado=8;}
            if(($servicio==6) and ($grado==3)){$idgrado=9;}
        }elseif($esquema==11){
            $idgrado=100;
        }elseif($esquema==12){
            $idgrado=100;
        }elseif($esquema==13){
            $idgrado=100;
        }
        return $idgrado;
    }

    public function obtenerIdGradoRevertido($id){
        $idgrado=0;
        if($id==1){$idgrado=1;}
        if($id==2){$idgrado=2;}
        if($id==3){$idgrado=3;}
        if($id==4){$idgrado=1;}
        if($id==5){$idgrado=2;}
        if($id==6){$idgrado=3;}
        if($id==7){$idgrado=1;}
        if($id==8){$idgrado=2;}
        if($id==9){$idgrado=3;}
        if($id==100){$idgrado=100;}
        return $idgrado;
    }

    public function obtenerIdAsignatura($servicio, $grado, $asignatura, $esquema){

        $idasignatura=0;
        if($esquema==10){
            if(($servicio==4) and ($grado==1) and ($asignatura==5)){$idasignatura=1;}
            if(($servicio==4) and ($grado==1) and ($asignatura==6)){$idasignatura=2;}
            if(($servicio==4) and ($grado==2) and ($asignatura==5)){$idasignatura=3;}
            if(($servicio==4) and ($grado==2) and ($asignatura==6)){$idasignatura=4;}
            if(($servicio==4) and ($grado==3) and ($asignatura==5)){$idasignatura=5;}
            if(($servicio==4) and ($grado==3) and ($asignatura==6)){$idasignatura=6;}
            if(($servicio==5) and ($grado==1) and ($asignatura==1)){$idasignatura=7;}
            if(($servicio==5) and ($grado==1) and ($asignatura==2)){$idasignatura=8;}
            if(($servicio==5) and ($grado==1) and ($asignatura==3)){$idasignatura=9;}
            if(($servicio==5) and ($grado==1) and ($asignatura==4)){$idasignatura=10;}
            if(($servicio==5) and ($grado==2) and ($asignatura==1)){$idasignatura=11;}
            if(($servicio==5) and ($grado==2) and ($asignatura==2)){$idasignatura=12;}
            if(($servicio==5) and ($grado==2) and ($asignatura==3)){$idasignatura=13;}
            if(($servicio==5) and ($grado==2) and ($asignatura==4)){$idasignatura=14;}
            if(($servicio==5) and ($grado==3) and ($asignatura==1)){$idasignatura=15;}
            if(($servicio==5) and ($grado==3) and ($asignatura==2)){$idasignatura=16;}
            if(($servicio==5) and ($grado==3) and ($asignatura==3)){$idasignatura=17;}
            if(($servicio==5) and ($grado==3) and ($asignatura==4)){$idasignatura=18;}
            if(($servicio==6) and ($grado==1) and ($asignatura==1)){$idasignatura=19;}
            if(($servicio==6) and ($grado==1) and ($asignatura==2)){$idasignatura=20;}
            if(($servicio==6) and ($grado==1) and ($asignatura==3)){$idasignatura=21;}
            if(($servicio==6) and ($grado==1) and ($asignatura==4)){$idasignatura=22;}
            if(($servicio==6) and ($grado==2) and ($asignatura==1)){$idasignatura=23;}
            if(($servicio==6) and ($grado==2) and ($asignatura==2)){$idasignatura=24;}
            if(($servicio==6) and ($grado==2) and ($asignatura==3)){$idasignatura=25;}
            if(($servicio==6) and ($grado==2) and ($asignatura==4)){$idasignatura=26;}
            if(($servicio==6) and ($grado==3) and ($asignatura==1)){$idasignatura=27;}
            if(($servicio==6) and ($grado==3) and ($asignatura==2)){$idasignatura=28;}
            if(($servicio==6) and ($grado==3) and ($asignatura==3)){$idasignatura=29;}
            if(($servicio==6) and ($grado==3) and ($asignatura==4)){$idasignatura=30;}
        }elseif($esquema==11){
            $idasignatura=100;
        }elseif($esquema==12){
            $idasignatura=100;
        }elseif($esquema==13){
            $idasignatura=100;
        }
        return $idasignatura;

    }
    public function obtenerIdAsignaturaLetra($id){
        $idasignatura=0;
        if($id==1){$idasignatura='C';} 
        if($id==2){$idasignatura='L';}
        if($id==3){$idasignatura='C';}
        if($id==4){$idasignatura='L';}
        if($id==5){$idasignatura='C';}
        if($id==6){$idasignatura='L';}

        if($id==7){$idasignatura='E';}
        if($id==8){$idasignatura='M';}
        if($id==9){$idasignatura='N';}
        if($id==10){$idasignatura='S';}
        if($id==11){$idasignatura='E';}
        if($id==12){$idasignatura='M';}
        if($id==13){$idasignatura='N';}
        if($id==14){$idasignatura='S';}
        if($id==15){$idasignatura='E';}
        if($id==16){$idasignatura='M';}
        if($id==17){$idasignatura='N';}
        if($id==18){$idasignatura='S';}


        if($id==19){$idasignatura='E';}
        if($id==20){$idasignatura='M';}
        if($id==21){$idasignatura='N';}
        if($id==22){$idasignatura='S';}
        if($id==23){$idasignatura='E';}
        if($id==24){$idasignatura='M';}
        if($id==25){$idasignatura='N';}
        if($id==26){$idasignatura='S';}
        if($id==27){$idasignatura='E';}
        if($id==28){$idasignatura='M';}
        if($id==29){$idasignatura='N';}
        if($id==30){$idasignatura='S';}

        if($id==100){$idasignatura='0';}


  


        return $idasignatura;
    }

}

Class funcionesComunes{
    private $managerMongo=null;
    private $managerPgCatalogo = null;
    private $managerPgControlEscolar=null;
    private $managerPgInaebaSecurity=null;


    public function __construct(){
        $mongo=new InaebaData2();
       // $mongo=new InaebaData2();
        $pg=new PostgresData2();

        $this->managerMongo=$mongo->getManagerMongo();
        $this->managerPgCatalogo=$pg->getConnectCatalogoPG();
        $this->managerPgControlEscolar=$pg->getConnectControlEscolarPG();
        $this->managerPgInaebaSecurity=$pg->getConnectAppySecurityPG();
    }

    public function getIdMongo2($matricula){
        $query = new MongoDB\Driver\Query(['curp'=>$matricula],["limit" => 1,]);
            $cursor = $this->managerMongo->executeQuery('inaebaData.persona_prod',$query);
    
             foreach($cursor as $document){
                 
                 $doc = (array)$document;
                $resultMongo= $doc['_id'] = (string)$doc['_id'];
             }
            
             return $resultMongo;
    }

public  function getIdCalibracion2($modelo, $servicio, $grado,
$asignatura,$tipo_atencion, $tipo_evaluacion, $servicio_grupo_etareo ){
$resultado=0;
$conexionpgcatalogo=$this->managerPgCatalogo;

$pgquery="select * from calibracion where id_modelo_educativo =$modelo
and id_servicio =$servicio 
and id_grado=$grado 
and id_asignatura =$asignatura
and id_tipo_atencion =$tipo_atencion 
and id_tipo_evaluacion =$tipo_evaluacion
and id_servicio_grupo_etareo =$servicio_grupo_etareo
and activo ='true'";
$solicitud = pg_query($conexionpgcatalogo, $pgquery)or die('Error: ' .pg_last_error().$pgquery);
 
while ($row_s = pg_fetch_object($solicitud)) {
 $resultado=$row_s->id;
    }



return $resultado;
}

public function getFolioExamen2($servicio, $esquemaevaluacion, $grado, $asignatura){
    $resultado=0;
    $conexionpgcontrolescolar=$this->managerPgControlEscolar;

    $tipo='E';
    $anio=substr(date('Y'),2,2);
    $serv=substr($servicio,0,1);
    $esquemaf=0;
    $gradof=0;
    $asignaturaf=0;

    if($esquemaevaluacion==13){$esquemaf='ED'; $gradof=1; $asignaturaf=0;}
    if($esquemaevaluacion==12){$esquemaf='GN'; $gradof=1; $asignaturaf=0;}
    if($esquemaevaluacion==11){$esquemaf='GG'; $gradof=1; $asignaturaf=0;}
    if($esquemaevaluacion==10){
        $esquemaf='AG'; 
        $gradof=$grado; $asignaturaf=$asignatura;
    }

    $pgquery="select * from solicitud_examen where folio_examen like('$tipo$anio$serv$esquemaf$gradof$asignaturaf%')";
    $solicitud = pg_query($conexionpgcontrolescolar, $pgquery)or die('Error: ' .pg_last_error().$pgquery);
    $numeroSolicitud=pg_num_rows($solicitud);
    return trim($tipo.$anio.$serv.$esquemaf.$gradof.$asignaturaf.sprintf("%07s",$numeroSolicitud+1));
 
   } 

   public function getDatosUsuario($curp){
   
        $resultado=0;
      
        $conexionpginaebasecurity=$this->managerPgInaebaSecurity;
        $pgquery="SELECT id,nombre,apellido1 FROM usuario WHERE curp= '$curp' and activo=true";

        $solicitud = pg_query($conexionpginaebasecurity, $pgquery)or die('Error: ' .pg_last_error().$pgquery);
        if( pg_num_rows($solicitud) > 0 ){
            while ($row_s = pg_fetch_object($solicitud)) {
                $resultado=$row_s->id;
            }
        }else{
        $resultado=0;

        }
        return $resultado;
   }

   public function setSolicitud($id_solicitud, $id_aplicador, $fecha_programacion_aplicacion){
        $conexionpgcontrolescolar=$this->managerPgControlEscolar;
        $sql = "UPDATE solicitud_examen 
        SET id_aplicador='$id_aplicador', estatus_control_escolar=16,
        fecha_programacion_aplicacion='$fecha_programacion_aplicacion' WHERE id='$id_solicitud'";
        $solicitud=pg_query($conexionpgcontrolescolar, $sql);
        $actualizados=pg_affected_rows($solicitud);
        if($actualizados>0){
                      
         return $id_solicitud;
	//return 123466;
       }else{
           return 0;
       }

   }
}


