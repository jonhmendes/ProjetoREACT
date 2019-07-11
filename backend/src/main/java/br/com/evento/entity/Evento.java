package br.com.evento.entity;

import javax.persistence.Entity;

import javax.validation.constraints.NotNull;



import lombok.Data;

@Entity
@Data
public class Evento {
	

	@NotNull
	private String email;
	@NotNull
	private String password;


public Evento() {
	// TODO Auto-generated constructor stub
}



public Evento( String email, String password) {
	super();
	this.email = email;
	this.password = password;
}


@Override
public String toString() {
	return "Evento [ email=" + email + ", password=" + password + "]";
}





public String getEmail() {
	return email;
}



public void setEmail(String email) {
	this.email = email;
}



public String getPassword() {
	return password;
}



public void setPassword(String password) {
	this.password = password;
}




	
}
