package br.com.evento.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.evento.entity.Evento;
import br.com.evento.repository.EventoRepository;

@RestController
@RequestMapping("/usuario")
public class EventoController {
	
	@Autowired
	EventoRepository eventoRepository;
	
	@GetMapping(path="/{usuario}",
		produces = {
				MediaType.APPLICATION_XML_VALUE,
				MediaType.APPLICATION_JSON_VALUE
				})
	public ResponseEntity<Evento>getUser(@PathVariable String userId){
		Evento returnValue = new Evento();
		returnValue.setEmail("teste@gmail.com");
		returnValue.setPassword("123");
		
		return new ResponseEntity<Evento>(returnValue , HttpStatus.OK);
		}
	
	
	
	
	@GetMapping
	public String getUsers(@RequestParam(value="page", defaultValue="1") int page,
							@RequestParam(value="limit" , defaultValue="50")int limit,
							@RequestParam(value="sort" ,defaultValue="desc", required=false) String sort)
		{
			return "get users was called with page = "+ page + " and limit = " + limit + "and sort = "+ sort;
			}
	
	@GetMapping
	Iterable<Evento> buscarTodos() {
		return eventoRepository.findAll();
	}
	
	@PostMapping
	void inserir(@RequestBody @Valid Evento e) {
		eventoRepository.save(e);
	}
	
	@PostMapping(
	        consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE},
	        produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE}
	)
	 public ResponseEntity<Evento>createUser(@RequestBody Evento userDetails) {
	        
		    Evento returnValue = new Evento();
	        returnValue.setEmail(userDetails.getEmail());
	        returnValue.setPassword(userDetails.getPassword());
	        return new ResponseEntity<Evento>(returnValue,HttpStatus.OK);
	    }


	
	

	
}
