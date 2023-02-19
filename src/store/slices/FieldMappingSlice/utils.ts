import { IField } from ".";

export function parseBearingFields(bearing: any, exgauster_name: string, bearing_name: string): IField[] {
    var fields: IField[] = [];
    try {
        fields.push({
            name: 'Температура нагрева',
            description: bearing['Температура нагрева']['Температура']['temperature']['description'],
            parent: exgauster_name,
            kafka: bearing['Температура нагрева']['Температура']['temperature']['name'],
            entity_name: bearing_name
        });
    } catch {}
    
    try {
        fields.push({
            name: 'Осевая вибрация',
            description: bearing['Вибрация']['Осевая']['vibration_axial']['description'],
            parent: exgauster_name,
            kafka: bearing['Вибрация']['Осевая']['vibration_axial']['name'],
            entity_name: bearing_name
        });
    } catch {}
    try {
        fields.push(
            {
                name: 'Вертикальная вибрация',
                description: bearing['Вибрация']['Вертикальная']['vibration_vertical']['description'],
                parent: exgauster_name,
                kafka: bearing['Вибрация']['Вертикальная']['vibration_vertical']['name'],
                entity_name: bearing_name
            }
        )
    } catch {}
    try {
        fields.push(
            {
                name: 'Горизонтальная вибрация',
                description: bearing['Вибрация']['Горизонтальная']['vibration_horizontal']['description'],
                parent: exgauster_name,
                kafka: bearing['Вибрация']['Горизонтальная']['vibration_horizontal']['name'],
                entity_name: bearing
            }
        )
    } catch {}
    return fields;
}

export function parseGauseCollector(coll_data: any, ex_name: string, signal_name: string): IField {
    return {
        name: "Температура",
        description: coll_data['temperature_before']['description'],
        parent: ex_name,
        kafka: coll_data['temperature_before']['description'],
        entity_name: signal_name
    } as IField
}

export function parseMainDrive(coll_data: any, ex_name: string, signal_name: string): IField[] {
    var ans: IField[] = [];
    try {
        ans.push({
            name: "Ток ротора",
            description: coll_data['rotor_current']['description'],
            parent: ex_name,
            kafka: coll_data['rotor_current']['name'],
            entity_name: signal_name
        });
    } catch {}
    try{
        ans.push({
            name: "Напряжение ротора",
            description: coll_data['rotor_voltage']['description'],
            parent: ex_name,
            kafka: coll_data['rotor_voltage']['name'],
            entity_name: signal_name
        })
    } catch {}
    try {
        ans.push({
            name: "Ток статора",
            description: coll_data['stator_current']['description'],
            parent: ex_name,
            kafka: coll_data['stator_current']['name'],
            entity_name: signal_name
        })
    } catch {}
    try {
        ans.push({
            name: "Напряжение статора",
            description: coll_data['stator_voltage']['description'],
            parent: ex_name,
            kafka: coll_data['stator_voltage']['name'],
            entity_name: signal_name
        })
    } catch {}
    return ans
}