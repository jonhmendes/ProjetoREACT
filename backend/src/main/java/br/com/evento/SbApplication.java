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
				new Evento("jonathan.mendes89@gmail.com", "123"),
				new Evento("teste@gmail.com", "123"));
		return args -> {
				eventos.forEach(repo::save);
		};
		
	}
}
