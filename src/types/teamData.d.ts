export interface TeamData {
	name: string;
	role: string;
	position?: string;
	since: number;
	qualifications: string;
	links?: {
		instagram?: string;
		facebook?: string;
	};
}
