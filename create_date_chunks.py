from datetime import datetime, timedelta

def get_past_date_ranges(start_date, periods, date_format="%Y-%m-%d"):
    """
    Return date ranges looking backwards 7 days at a time.
    
    :param start_date: The starting date in "yyyy-mm-dd" format.
    :param periods: The number of 7-day periods to look backwards.
    :param date_format: The format in which to return the dates.
    :return: A list of lists containing date ranges.
    """
    current_date = datetime.strptime(start_date, date_format)
    date_ranges = []

    for _ in range(periods):
        end_date = current_date
        start_date = current_date - timedelta(days=7)
        date_ranges.append([start_date.strftime(date_format), end_date.strftime(date_format)])
        current_date = start_date

    return date_ranges

# Example usage:
today = "2024-07-17"
print(get_past_date_ranges(today, 10))
