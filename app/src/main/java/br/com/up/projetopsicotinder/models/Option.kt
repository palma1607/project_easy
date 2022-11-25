package br.com.up.projetopsicotinder.models

data class Option (
    val label: String,
    val value: String,
    var checked: Boolean = false
)