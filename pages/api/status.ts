function status(request: Request, response: Response) {
    response.status(200).json({ chave: "curso.dev úma didatica incrivel"})
}

export default status;