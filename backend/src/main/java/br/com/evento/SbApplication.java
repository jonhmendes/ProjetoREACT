package br.com.evento;

import java.util.stream.Stream;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import br.com.evento.entity.Evento;
import br.com.evento.repository.EventoRepository;

@SpringBootApplication
public class SbApplication {

	public static void main(String[] args) {
		SpringApplication.run(SbApplication.class, args);
	}
	@Bean
	ApplicationRunner run(EventoRepository repo) {
		Stream<Evento> eventos = Stream.of(
				new Evento(null,"2018-06-26 16:00", "2018-06-26 18:00", "Dar banho no cachorro", "Banho cachorro"),
				new Evento(null,"2018-06-26 16:00", "2018-06-26 18:00", "Ir buscar meu carro na oficina", "Mecânico"));
		return args -> {
				eventos.forEach(repo::save);
		};
		
	}
}
