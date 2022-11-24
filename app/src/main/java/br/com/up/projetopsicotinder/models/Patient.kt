package br.com.up.projetopsicotinder.models

class Patient : User() {
    var emergency_phone = ""
    var desiredPosture = 1 // 1 - Ativa // 2 - Passiva
    var desiredAge = 1 // 1 - até 35 // 2 - > 35 // 3 - Ambos
    var desiredGender = 1 // 1 - M cis // 2 - H cis // 3 - M trans // 4 - H trans // 5 - N binário // 6 - Indiferente
    var desiredExperience = ""// tempo de experiencia
}