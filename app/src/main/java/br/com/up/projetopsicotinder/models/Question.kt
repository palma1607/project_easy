package br.com.up.projetopsicotinder.models

data class Question (
    val id: String,
    val label: String,
    val type: String,
    var options: List<Option>
)