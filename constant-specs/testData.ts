export const TEST_DATA = {
    USER: {
        EMAIL: 'adjuster@example.com',
        PASSWORD: 'Claims2024!',
    },

    VALID_CSV: [
        'Address,Latitude,Longitude,Property value',
        '123 Main St,37.7749,-122.4194,850000',
        '456 Oak Ave,37.7849,-122.4094,920000',
        '789 Pine Rd,37.7649,-122.4294,750000',
    ].join('\n'),

    INVALID_HEADER_CSV: [
        'Street,Lat,Long,Value',
        '123 Main St,37.7749,-122.4194,850000'
    ].join('\n'),

    SINGLE_ROW_CSV: [
        'Address,Latitude,Longitude,Property value',
        '123 Main St,37.7749,-122.4194,850000'
    ].join('\n'),
};