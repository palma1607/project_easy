package br.com.up.projetopsicotinder.models

abstract class User {
    var name = ""
    var email = ""
    var cpf = ""
    var age = ""
    var id_photo = ""
    var endereco = ""
    var cep = ""

    var availability = 1 // 1 - Manhã // 2 - Tarde // 3 - Noite
    var remotePreferente = 1 // 1 - Sim // 2 - Não
}