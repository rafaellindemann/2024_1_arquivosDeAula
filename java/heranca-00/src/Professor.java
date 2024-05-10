class Professor extends Pessoa {
    private String area;

    public Professor(String nome, int id, String senha, String area) {
        super(nome, id, senha);
        this.area = area;
    }

    public void fazerChamada() {
        System.out.println("Chamada realizada para a área de " + area);
    }

    // Getter e Setter específico
    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }
}