package br.com.up.projetopsicotinder

import android.view.View
import android.os.Bundle
import android.view.ViewGroup
import android.view.LayoutInflater
import android.widget.Button
import android.widget.RatingBar
import android.widget.Toast
import androidx.fragment.app.DialogFragment
import br.com.up.projetopsicotinder.R

@Suppress("UnnecessaryVariable")

class PopUpStar : DialogFragment() {

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val rootView = inflater.inflate(R.layout.pop_star_layout, container, false)

        return rootView
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        val ratingBar = view.findViewById<RatingBar>(R.id.ratingBar)
        ratingBar.setOnRatingBarChangeListener { _, rating, _ ->
            Toast.makeText(context, "Avaliação: $rating", Toast.LENGTH_SHORT).show()
        }
    }

    override fun onStart() {
        super.onStart()
        val enviarAvaliacao = dialog?.findViewById<Button>(R.id.avaliacao_consulta_button)
        enviarAvaliacao?.setOnClickListener {
            Toast.makeText(context, "Avaliação enviada com sucesso!", Toast.LENGTH_SHORT).show()
            dismiss()
        }
    }
}
