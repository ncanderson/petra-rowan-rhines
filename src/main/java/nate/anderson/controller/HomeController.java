package nate.anderson.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {

	@Autowired
	public HomeController(/* Inject any DAO here */) {
	}

	@RequestMapping(value={"/", "/home"}, method=RequestMethod.GET)
    public String getHomePage() {        
		return "index";
    }

	@RequestMapping(value={"/callback"}, method=RequestMethod.GET)
    public String handleAuth0Callback() { 
		//System.out.println("test");
		return "index";
    }
}
