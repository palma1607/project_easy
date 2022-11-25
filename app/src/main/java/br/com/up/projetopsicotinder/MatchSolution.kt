package br.com.up.projetopsicotinder

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ListView

class MatchSolution : AppCompatActivity() {

    class Patient ( val name : String, val answer_1 : String, val answer_2 : String, val answer_3 : String, val answer_4 : String)
    class Psycologist (val name : String, val answer_1 : String, val answer_2 : String, val answer_3 : String, val answer_4 : String)
    class Match (var name_patiet : String, var name_psycologist : String, var classification : Int)

    private var  patients =
        Patient("Nome 1", "A", "A", "B", "A")

    private var  psycologists = listOf(
        Psycologist("Nome 1", "A", "A", "B", "A"),
        Psycologist("Nome 2", "C", "B", "D", "B"),
        Psycologist("Nome 3", "D", "C", "E", "A"),
        Psycologist("Nome 4", "B", "A", "A", "D"),
    )

    private var matchList = arrayListOf<Match>()

    private lateinit var listView: ListView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.match_solution)

        listView = findViewById<ListView>(R.id.psico_list)
        get_match(patients)

        val adapter = ListViewAdapter(this, matchList)
        listView.adapter = adapter

        listView.setOnItemClickListener { p0, p1, p2, p3 ->
            val popUp = PopUpStar()
            popUp.show(supportFragmentManager, "popUp")
        }
    }

    fun get_match(patient : Patient){
        var count_match : Int = 0
        for(psycologist in psycologists){
            var actual_match = Match(patient.name, psycologist.name, 0)
            count_match = 0
            if(psycologist.answer_1 == patient.answer_1){
                count_match++
            }
            if(psycologist.answer_2 == patient.answer_2){
                count_match++
            }
            if(psycologist.answer_3 == patient.answer_3){
                count_match++
            }
            if(psycologist.answer_4 == patient.answer_4) {
                count_match++
            }
            actual_match?.classification = count_match
            matchList.add(actual_match)
        }
        matchList.sortByDescending { it.classification }
    }
}

