package nate.anderson.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RESTFULController {

	/*
	@Autowired
	private DAOImplementation daoImplementation;
	
	@ResponseBody
	@RequestMapping(path="/path", method = RequestMethod.GET)
	public String getStuff() {
		
		return dao.getStuff();
	}
	*/
	
	@Autowired
	public RESTFULController(/* Inject DAO Impl. here */) {
	}	

}

