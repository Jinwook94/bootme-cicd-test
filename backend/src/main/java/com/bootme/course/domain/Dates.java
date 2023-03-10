package com.bootme.course.domain;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;
import java.time.LocalDate;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Embeddable
public class Dates {

    private LocalDate registrationStartDate;
    private LocalDate registrationEndDate;
    private LocalDate courseStartDate;
    private LocalDate courseEndDate;

    @Builder
    public Dates(LocalDate registrationStartDate, LocalDate registrationEndDate, LocalDate courseStartDate, LocalDate courseEndDate) {
        this.registrationStartDate = registrationStartDate;
        this.registrationEndDate = registrationEndDate;
        this.courseStartDate = courseStartDate;
        this.courseEndDate = courseEndDate;
    }

    public boolean isRegistrationStartsOn(LocalDate date) {
        return registrationStartDate.equals(date);
    }

    public boolean isRegistrationEndsOn(LocalDate date) {
        return registrationEndDate.equals(date);
    }

}
