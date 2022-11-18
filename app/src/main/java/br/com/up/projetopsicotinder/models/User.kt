package br.com.up.projetopsicotinder.models

abstract class User {
    var name = ""
    var lastName = ""
    var email = ""
    var cpf = ""
    var age = ""
    var id_photo = ""
    var district = ""
    var city = ""
    var state = ""
    var street = ""
    var number = ""
    var complement = ""
    var cep = ""
    var userType = 1 // 1 - Paciente // 2 - Profissional

    var availability = 1 // 1 - Manhã // 2 - Tarde // 3 - Noite
    var remotePreferente = 1 // 1 - Sim // 2 - Não
}