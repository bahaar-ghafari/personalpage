interface actionType {
  client: string;
  command_state:
    | "pending"
    | "scheduled"
    | "failed"
    | "success"
    | "running"
    | "expired"
    | "canceled";
  command_type: "instant" | "scheduled";
  commander: string;
  created_at: Date;
  expiration_time: Date;
  meta_data: { multi_screen: boolean };
  module: string;
  name: string;
  __v: number;
  _id: string;
  file_path: string[];
}
export type { actionType };
