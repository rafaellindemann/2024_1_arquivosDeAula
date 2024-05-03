import javax.swing.*;

public class Conta {
    private String nome;
    private int numero;
    private float saldo;

    public Conta(String nome, int numero, float saldo) {
        this.nome = nome;
        this.numero = numero;
        this.saldo = saldo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public float getSaldo() {
        return saldo;
    }

    public void setSaldo(float saldo) {
        this.saldo = saldo;
    }
    public void sacar(float valor){
        if(this.getSaldo() >= valor){
            this.setSaldo(this.getSaldo() - valor);
        }else {
            JOptionPane.showMessageDialog(null,"Saldo insuficiente :P");
        }

    }
    public void depositar(float valor){
        this.setSaldo(this.getSaldo() + valor);
    }
}
