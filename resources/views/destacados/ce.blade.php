@extends('layouts.main')

@section('title', 'Descarga de Certificado Electrónico')

@section('meta')
  <meta property="keywords" content="Certificado Electrónico, Descarga, INAEBA, " />
  <meta property="description" content="" />
@endsection

@section('content')
<div class="prime-area">
      <div class="container-fluid">
        <div class="row">
          <div class="column col-xs-12 col-sm-12 li-cardk">
            <div class="lst-head">Certificado Electrónico</div>
          </div>
        </div>
        <div class="row">
        <div class="row margin15 slider-destacados">
        <div class="youresp col-xs-12 col-sm-8">
               <br>
                  <p id="lblTextoIntoduccion2" class="textoCertificado">Sí concluiste tu primaria y secundaria en INAEBA y recibiste la notificación a través de mensaje de texto o por correo electrónico, que ya está disponible tu certificado, podrás descargarlo ingresando tu CURP y el nivel educativo que concluiste.
                    </p>
                </div>
             </div>
        
             <div class="column col-xs-12 col-sm-4 li-cardk">
                <div class="dest-he">
                        <div class="lt-head">SERVICIOS</div>
                         <div class="row-lin"><div class="ico1"></div><a href="alfabetizacion"><label>ALFABETIZACIÓN</label></a></div>
                         <div class="row-lin"><div class="ico1"></div><a href="primaria"><label>PRIMARIA</label></a></div>
                         <div class="row-lin"><div class="ico1"></div><a href="secundaria"><label>SECUNDARIA</label></a></div>
						 <div class="row-lin"><div class="ico1"></div><a href="ce"><label>CERTIFICACIÓN ELECTRÓNICA</label></a></div>
                </div>
            </div>

            <div class="row" id="divBuscaCertificado">
                      <div class="col-md-2"></div>
                        <div class="col-md-4">
                        <form id="frmCe">
                          <input type="hidden" name="nuevacurp" id="nuevacurp" value="">
                          <input type="hidden" name="nuevoNivel" id="nuevoNivel" value="">
                          <div class="form-group">
                            <input type="text" class="form-control  txtCurp" name="txtCurpCertificado" id="txtCurpCertificado" maxlength="18" required="required" onclick="clMsn()">
                          </div>
                          <center><div id="msnCurp"></div></center>
                          <div class="form-group">
                            <select class="form-control cmbNivel" name="cmbNivelCertificado" id="cmbNivelCertificado" onclick="clMsn();">
                              <option value="">SELECCIONE NIVEL</option>
                              <option value="2">CERTIFICADO PRIMARIA</option>
                              <option value="3">CERTIFICADO SECUNDARIA</option>
                            </select>
                          </div>
                          <center><div id="msnNivel"></div>  </center>
                          <center><button type="button" style="box-shadow: 0 15px 20px -10px rgba(0, 0, 0, 0.3);" class="btn btn-small btn-info" onclick="getDataCe();"><i class="fa fa-search"></i> BUSCAR</button></center> 
                        </form>
                        <div id="loading" style="display: none;">
                          <center>
                              <img src="../../sac/img/mevyt/mev_2.gif" style=" width: 60px; height: 60px;">
                          </center>
                          <center>Buscando certificado ...</center>
                        </div>
                        <center>
                          <div id="divMensajes" style="display: block;">
                          </div>
                        </center>
                      </div>
                    </div>
                  <div id="divEncuesta"></div>
                  <div id="divCertificado">
                  </div>
                </div>
            </div>

</div>
</div>

@stop