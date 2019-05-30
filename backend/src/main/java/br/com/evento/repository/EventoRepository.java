package br.com.evento.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import br.com.evento.entity.Evento;


public interface EventoRepository extends PagingAndSortingRepository<Evento, Long> {

		
}
