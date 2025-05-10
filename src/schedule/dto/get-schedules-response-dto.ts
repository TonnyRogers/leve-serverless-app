export class GetSchedulesResponseItem {
  id: number;
  horarios_disponiveis: string[];
  nome: string;
  especialidade: string;
}

export class GetSchedulesResponseDto {
  medicos: GetSchedulesResponseItem[];
}
