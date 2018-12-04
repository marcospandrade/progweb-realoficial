<?php

//Route::get('/', 'WelcomeController@index')->name('welcome');

//Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');

//Route::get('/perfil', 'UsuarioController@perfilUsuario')->name('perfilUsuario');

Route::get('/{any}', 'SinglePageController@index')->where('any', '.*');

