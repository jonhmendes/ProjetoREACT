package br.com.evento.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;



import lombok.Data;

@Entity
@Data
public class Evento {
	
	@Id
	@GeneratedValue
	private Long id;
	@NotNull
	private String dataHoraInicio;
	@NotNull
	private String dataHoraFim;
	@NotNull
	private String descricao;
	@NotNull
	private String nome;
	

public Evento() {
	// TODO Auto-generated constructor stub
}





public Evento(Long id, String dataHoraInicio, String dataHoraFim, String descricao, String nome) {
	super();
	this.id = id;
	this.dataHoraInicio = dataHoraInicio;
	this.dataHoraFim = dataHoraFim;
	this.descricao = descricao;
	this.nome = nome;
}





public Long getId() {
	return id;
}


public void setId(Long id) {
	this.id = id;
}


public String getDataHoraInicio() {
	return dataHoraInicio;
}


public void setDataHoraInicio(String dataHoraInicio) {
	this.dataHoraInicio = dataHoraInicio;
}


public String getDataHoraFim() {
	return dataHoraFim;
}


public void setDataHoraFim(String dataHoraFim) {
	this.dataHoraFim = dataHoraFim;
}


public String getDescricao() {
	return descricao;
}


public void setDescricao(String descricao) {
	this.descricao = descricao;
}


public String getNome() {
	return nome;
}


public void setNome(String nome) {
	this.nome = nome;
}	

	
}
