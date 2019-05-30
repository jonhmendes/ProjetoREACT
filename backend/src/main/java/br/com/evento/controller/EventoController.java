package br.com.evento.controller;

import java.util.Arrays;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.evento.entity.Evento;
import br.com.evento.repository.EventoRepository;

@RestController
@RequestMapping("/agenda")
public class EventoController {
	
	@Autowired
	EventoRepository eventoRepository;
	
	@GetMapping("/{nome}")
	List<String> buscarPorNome(@PathVariable String nome) {
		return Arrays.asList("Mecanico", nome);
	}
	
	@GetMapping
	Iterable<Evento> buscarTodos() {
		return eventoRepository.findAll();
	}
	
	@PostMapping
	void inserir(@RequestBody @Valid Evento e) {
		eventoRepository.save(e);
	}

			
	

	
}
