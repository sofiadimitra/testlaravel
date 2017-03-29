<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\ContactUS;

class ContactUSController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function contactUS()
    {
        return view('contactUS');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function contactUSPost(Request $request)
    {
        $this->validate($request, [
        		'name' => 'required',
        		'email' => 'required|email',
        		'message' => 'required'
        	]);

        ContactUS::create($request->all());
	    $response = [
	        'status' => 'success',
	        'msg' => 'Mail sent successfully',
	        'name' => $request->get('name'),
        	'email' => $request->get('email'),
        	'subject' => $request->get('subject'),
        	'message' => $request->get('message')
	    ];
	    return response()->json([$response], 200);
	    return back()->with('success', 'Thanks for contacting us!');


    }
}