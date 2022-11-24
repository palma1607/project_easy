package br.com.up.projetopsicotinder.models

class Professional : User() {
    var crp = ""
    var professionalPosture = 1 // 1 - Ativa // 2 - Passiva
    var gender = 1 // 1 - M cis // 2 - H cis // 3 - M trans // 4 - H trans // 5 - N binário // 6 - Indiferente
    var experienceYears = ""
}