package br.com.up.projetopsicotinder

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.TextView

class ListViewAdapter(private val context: Context, private val dataSource: ArrayList<MatchSolution.Match>) : BaseAdapter() {

    private val inflater: LayoutInflater = context.getSystemService(Context.LAYOUT_INFLATER_SERVICE) as LayoutInflater

    override fun getCount(): Int {
        return dataSource.size
    }

    override fun getItem(position: Int): Any {
        return dataSource[position]
    }

    override fun getItemId(position: Int): Long {
        return position.toLong()
    }

    override fun getView(position: Int, view: View?, p2: ViewGroup?): View {

        val match = dataSource[position]

        var viewItem = view
        if(viewItem == null){
            viewItem = inflater.inflate(R.layout.item_psico_layout, p2,false)
        }

        val textView = viewItem?.findViewById<TextView>(R.id.textView)

        textView?.text = match.name_psycologist

        return viewItem!!
    }

}